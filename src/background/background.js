chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    shows: [],
  });

  chrome.contextMenus.create({
    title: `Search Related Shows`,
    id: "showsFinder",
    contexts: ["selection", "page"],
  });

  chrome.contextMenus.create({
    title: `Read This Text`,
    id: "myTextReader",
    contexts: ["selection", "page"],
  });

  chrome.contextMenus.onClicked.addListener((info) => {
    // === === === onClick Text to Speech === === ===
    if (info.menuItemId === "myTextReader") {
      chrome.tts.speak(info.selectionText);
    }

    // === === === onClick Fetch API === === ===
    if (info.menuItemId === "showsFinder") {
      fetch("http://api.tvmaze.com/search/shows?q=" + info.selectionText)
        .then((res) => res.json())
        .then((res) =>
          chrome.storage.local.set({
            shows: res,
          })
        )
        .catch((err) => console.log("=====> err <=====", err));
    }

    // === === === onClick Searching === === ===
    // console.log("=====> info <=====", info);
    // chrome.tabs.create({
    //   url:
    //     "https://www.imdb.com/find?q=" +
    //     info.selectionText.replace(/\s+/g, "+"),
    // });
  });
});
