function floorEvenInt(index){ return (index % 2 == 0) ? index : index - 1 }
function maxQuestion(){ return document.querySelectorAll('.items-center .group').length - 1 }
function keyScroller(){ return document.querySelector('main div.flex-1 div div') }
function textInput(){ return document.querySelector('.m-0') }

let largeOffset = 500
let smallOffset = 100

var historyIndex = maxQuestion()
var currentInput = ""

function updateTextInput(text) {
  textInput().value = text
}

function textOfQuestion(index) {
  var i = index > maxQuestion() ? 0 : index
  i = index < 0 ? maxQuestion() : index

  if (index != i) {
    return [
      i,
      currentInput
    ]
  }

  i = floorEvenInt(index)
  var text = ""

  try {
    text = document.querySelectorAll('.items-center .group')[i].innerText
  } catch(e) {
    i = maxQuestion()
    text = currentInput
  }

  return [i, text]
}

window.addEventListener('keyup', function(e){
  if (e.detail?.ignore) {
    return
  }
  if (e.key == 'Enter') {
    textInput().focus()
  }
  else if (e.altKey && e.ctrlKey && e.key == 'ArrowUp') {
    keyScroller().scrollBy(0, -smallOffset)
    return
  }
  else if (e.altKey  && e.key == 'ArrowUp') {
    let [i, text] = textOfQuestion(historyIndex - 2)
    historyIndex = i
    updateTextInput(text)
    return
  }
  else if (e.ctrlKey && e.key == 'ArrowUp') {
    keyScroller().scrollBy(0, -largeOffset)
    return
  }
  else if (e.altKey  && e.key == 'ArrowDown') {
    let [i, text] = textOfQuestion(historyIndex + 2)
    historyIndex = i
    updateTextInput(text)
    return
  }
  else if (e.altKey && e.ctrlKey && e.key == 'ArrowDown') {
    keyScroller().scrollBy(0, smallOffset)
    return
  }
  else if (e.ctrlKey && e.key == 'ArrowDown') {
    keyScroller().scrollBy(0, largeOffset)
    return
  }

  currentInput = textInput().value
})

// content.js

// Alignment Prompt
var alignmentPrompt = "" // Declare the variable in a higher scope

function waitForDOMReady() {
  return new Promise((resolve) => {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      resolve()
    } else {
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
          resolve()
        }
      })
    }
  })
}

function waitForElement(selector) {
  return new Promise((resolve) => {
    const observer = new MutationObserver((mutationsList, observer) => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
  });
}

async function main() {
  await waitForDOMReady()

  console.log("chatGPTKeyboarControl asyn main()")

  const targetElement = await waitForElement('textarea.m-0')

  function onGetAlignmentPromptError(error) {
    console.log(`Get alignment prompt error: ${error}`)
  }

  function onGotAlignmentPrompt(message) {
    console.log(`Got alignment prompt: ${message.alignmentPrompt}`)
    alignmentPrompt = message.alignmentPrompt
  }

  const getAlignmentPrompt = browser.storage.sync.get("alignmentPrompt")

  getAlignmentPrompt
    .then(onGotAlignmentPrompt,
          onGetAlignmentPromptError)

  targetElement.addEventListener("keydown", function(e) {
    console.log(`Listening to Ctrl Enter ${targetElement}`)
    if (e.key == "Enter" && e.ctrlKey) {
      console.log("on Ctrl Enter - adding alignmentPrompt")
      updateTextInput(targetElement.value + alignmentPrompt)
      targetElement.focus()
    }
  })

  const handleBrowserMessage = function(request, sender, sendResponse) {
    var updatedPrompt = requestValue
    debugger
    console.log('Alignment Prompt:', updatedPrompt)

    alignmentPrompt = updatedPrompt
  }

  // Listen for messages from the options page
  browser.runtime.onMessage.addListener(handleBrowserMessage)
  // Your code to interact with the DOM
}

main()

console.log("Loaded chatGPTKeyboarControl")
