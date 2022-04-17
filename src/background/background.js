let selectedText = "";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    shows: [],
  });

  chrome.contextMenus.create({
    title: `Search Related Shows`,
    id: "showsFinder",
    contexts: ["selection"],
  });

  chrome.contextMenus.onClicked.addListener((info) => {
    // === === === onClick Fetch API === === ===
    fetch("http://api.tvmaze.com/search/shows?q=" + info.selectionText)
      .then((res) => res.json())
      .then((res) =>
        chrome.storage.local.set({
          shows: res,
        })
      );

    // === === === onClick Searching === === ===
    // console.log("=====> info <=====", info);
    // chrome.tabs.create({
    //   url:
    //     "https://www.imdb.com/find?q=" +
    //     info.selectionText.replace(/\s+/g, "+"),
    // });
  });
});
