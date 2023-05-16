# ChatGPT Keyboard Controls

A small webextension which allows keyboard controls to navigate a ChatGPT conversation.

- Ctrl + Arrow Up/Down : move up and down the page 500 pixels at a time
- Ctrl + Alt + Arrow Up/Down : as above but 100 pixels
- Alt + Up/Down : Navigate through your previous questions
- Enter : bring focus to the text input area

Note that you'll need to trigger the input resize after moving through question history, by pressing space, until I figure out how to make it work (faking a keypress, keyup, keydown doesn't seem to work!)

# Install

Clone the repo and open manifest from "about:debugging" in Firefox via install temporary extension.

# Thanks...

Thanks to ChatGPT for helping me build this.

