// options.js
document.addEventListener('DOMContentLoaded', function() {
  var promptTextarea = document.getElementById('promptTextarea');

  // Retrieve the stored setting value
  browser.storage.sync.get('standardConditioningPrompt', function(data) {
    // Use the stored value or provide a default value if not set
    var defaultValue = 'Enter your default prompt here';
    var promptValue = data.standardConditioningPrompt || defaultValue;

    // Set the initial value of the textarea
    promptTextarea.value = promptValue;

    // Dispatch an event to notify the content script with the updated value
    document.dispatchEvent(new CustomEvent('StandardConditioningPromptUpdated', {
      detail: promptValue
    }));
  });

  // Add an event listener to capture changes in the textarea
  promptTextarea.addEventListener('input', function(event) {
    var newValue = event.target.value;

    // Store the updated value
    browser.storage.sync.set({ 'standardConditioningPrompt': newValue });

    // Dispatch an event to notify the content script with the updated value
    document.dispatchEvent(new CustomEvent('StandardConditioningPromptUpdated', {
      detail: newValue
    }));
  });
});
