// debug_print = console.log
// disable debug_print
debug_print = (t) => {}

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
  // Need to figure out how the page does resize on the textarea...
  // .. it's not this though.
  // textInput().dispatchEvent(new Event('keypress', {keyCode: 300, key: " "}))
}

function textOfQuestion(index) {
  debug_print(`textOfQuestion(${index})`)
  // wrap-around
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
    debug_print(e)
    i = maxQuestion()
    text = currentInput
  }

  debug_print(`Max Question: ${maxQuestion()}`)
  debug_print(`Question index: ${i}`)
  debug_print(`Question Text: ${text}`)
  debug_print(`Current Input: ${currentInput}`)

  return [
    i, text
  ]
}

let textinput = document.querySelector('.m-0')
textinput.onkeydown = function(e) {
  if (e.key == "Enter" && e.ctrlKey) {
    e.target.value += standardConditioningPrompt
  }
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

var standardConditioningPrompt = ""

// content.js (content script)
document.addEventListener('StandardConditioningPromptUpdated', function(event) {
  var updatedPrompt = event.detail;

  // Use the updated prompt value in the content script
  console.log('Standard Conditioning Prompt:', updatedPrompt);
  standardConditioningPrompt = updatedPrompt
});

debug_print("Loaded chatGPTKeyboarControl")
