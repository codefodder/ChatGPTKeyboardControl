console.log("ChatGPT keyboard controls")

var promptTextarea = document.getElementById('promptTextarea');

// Retrieve the stored setting value
browser.storage.sync.get('alignmentPrompt', function(data) {

  var defaultValue = "defaultValue";

  var promptValue = data?.alignmentPrompt || defaultValue

  // Set the initial value of the textarea
  promptTextarea.value = promptValue

  // Send the updated prompt value to the content script
  try {
    browser.runtime.sendMessage({ promptValue: promptValue })
  } catch {
    console.error("OH NO")
  }
})

// Add an event listener to capture changes in the textarea
promptTextarea.onkeyup = function(event) {
  var newValue = event.target.value;

  // Store the updated value
  browser.storage.sync.set({ 'alignmentPrompt': newValue })

  // Send the updated prompt value to the content script
  browser.runtime.sendMessage({ promptValue: newValue })

  console.log("Updated alignmentPrompt:")
  console.log(newValue)
}
