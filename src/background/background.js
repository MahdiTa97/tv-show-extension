chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.create({
    title: "Test Context Menu2",
    id: "contextMenu2",
    contexts: ["page", "selection"],
    parentId: "contextMenu1",
  });
  chrome.contextMenus.create({
    title: "Test Context Menu3",
    id: "contextMenu3",
    contexts: ["page", "selection"],
    parentId: "contextMenu1",
  });

  chrome.contextMenus.onClicked.addListener((info) => {});
});
