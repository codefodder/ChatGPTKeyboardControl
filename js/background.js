// background.js

// Listen for messages from the options page
browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log(`On Message: ${message}`)
  if (message.promptValue) {
    // Pass the message to the content script
    browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      console.log(`Sending to tab: ${tabs[0].id}`)
      browser.tabs.sendMessage(tabs[0].id, { promptValue: message.promptValue });
    });
  }
});
