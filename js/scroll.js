function floorEvenInt(index){ return (index % 2 == 0) ? index : index - 1 }
function maxQuestion(){ return document.querySelectorAll('.items-center .group').length - 1 }
function keyScroller(){ return document.querySelector('main div.flex-1 div div') }
function textInput(){ return document.querySelector('.m-0') }

let largeOffset = 500
let smallOffset = 100

var historyIndex = maxQuestion()

function textOfQuestion(index) {
  // wrap-around
  i = index > maxQuestion() ? 0 : index
  i = index < 0 ? maxQuestion() : index

  if (index != i) {
    return [
      i,
      textInput().value
    ]
  }

  i = floorEvenInt(index)
  return [
    i,
    document.
      querySelectorAll('.items-center .group')[
        floorEvenInt(i)
      ].innerText
  ]
}

window.addEventListener('keyup', function(e){

  if (e.key == 'Enter') {
    textInput().focus()
  }
  else if (e.altKey && e.ctrlKey && e.key == 'ArrowUp') {
    keyScroller().scrollBy(0, -smallOffset)
  }
  else if (e.altKey  && e.key == 'ArrowUp') {
    let [i, text] = textOfQuestion(historyIndex - 2)
    historyIndex = i
    textInput().value = text
  }
  else if (e.ctrlKey && e.key == 'ArrowUp') {
    keyScroller().scrollBy(0, -largeOffset)
  }
  else if (e.altKey  && e.key == 'ArrowDown') {
    let [i, text] = textOfQuestion(historyIndex + 2)
    historyIndex = i
    textInput().value = text
  }
  else if (e.altKey && e.ctrlKey && e.key == 'ArrowDown') {
    keyScroller().scrollBy(0, smallOffset)
  }
  else if (e.ctrlKey && e.key == 'ArrowDown') {
    keyScroller().scrollBy(0, largeOffset)
  }
})

console.log("Loaded chatGPTKeyboarControl")
