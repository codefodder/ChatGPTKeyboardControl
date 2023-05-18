# ChatGPT Keyboard Controls

A small webextension which allows keyboard controls to navigate a ChatGPT conversation.

- Ctrl + Arrow Up/Down : move up and down the page 500 pixels at a time
- Ctrl + Alt + Arrow Up/Down : as above but 100 pixels
- Alt + Up/Down : Navigate through your previous questions
- Enter : bring focus to the text input area
- Ctrl + Enter : Submit your prompt, adding your response conditioning text to your prompt.

# Response Conditioning Text

Go to the extention preferences to add your **Response Conditioning Text**

This text will be added to the end of the entered prompt, When you press Ctrl+Enter, instead of Enter.

It can be used to enter any text you need, to condition ChatGPT responses.

For example:

> _"Be concise", "always say I am not sure", or "I don't know", instead of adding information you are not sure about in your responses._

With the proper conditioning prompt you can reduce noise, and get better quality responses.

# Install

Clone the repo and open manifest from "about:debugging" in Firefox via install temporary extension.

# Thanks...

Thanks to ChatGPT for helping me build this.

