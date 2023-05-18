// background.js

// Listen for messages from the options page
browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.promptValue) {
    // Pass the message to the content script
    browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      browser.tabs.sendMessage(tabs[0].id, { promptValue: message.promptValue });
    });
  }
});
