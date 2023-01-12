chrome.browserAction.onClicked.addListener(function () {
    let enable = true;
    if (enable) {
        enable = false;
      chrome.browserAction.enable();
    }
    else {
        enable = true;
        clearInterval(changeTitle);
        chrome.browserAction.disable();
        }
  });
  

  