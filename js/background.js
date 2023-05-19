// background.js

// Establish a channel with background <-> content
var channel = browser.runtime.connect({ name: "chatGPTKeyboardControl" });

// Listen for messages
channel.onMessage.addListener(function(message) {
  // debug only // incoming messages from content script
  console.log(`Message: ${JSON.stringify(message)}`)
});

browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log(`On Message: ${message}`)
  if (message.promptValue) {
    // pass on promptValue to content
    channel.postMessage({ promptValue: message.promptValue });
  }
});
