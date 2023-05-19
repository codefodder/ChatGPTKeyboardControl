console.log("ChatGPT keyboard controls")

var promptTextarea = document.getElementById('promptTextarea');

// Retrieve the stored setting value
browser.storage.sync.get('alignmentPrompt', function(data) {
  var defaultValue = "";

  var promptValue = data?.alignmentPrompt || defaultValue
  promptTextarea.value = promptValue

  try {
    browser.runtime.sendMessage({ promptValue: promptValue })
  } catch {
    console.error("Error sending promptValue")
  }
})

// Add an event listener to capture changes in the textarea
promptTextarea.onkeyup = function(event) {
  var newValue = event.target.value;
  browser.storage.sync.set({ 'alignmentPrompt': newValue })
  browser.runtime.sendMessage({ promptValue: newValue })
}
