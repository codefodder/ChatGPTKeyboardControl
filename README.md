# ChatGPT Keyboard Controls

A small webextension which allows keyboard controls to navigate a ChatGPT conversation.

- Ctrl + Arrow Up/Down : move up and down the page 500 pixels at a time
- Ctrl + Alt + Arrow Up/Down : as above but 100 pixels
- Alt + Up/Down : Navigate through your previous questions
- Enter : bring focus to the text input area
- Ctrl + Enter : Submit your prompt, adding your alignment prompt text to your prompt.

# Preferences

### Alignment prompt

Go to the extention preferences to add your **Alignment Prompt**

Use this to add text to improve ChatGPT responses.

When writing a prompt, pressing Ctrl+Enter will add this text to the end of your input prompt, sending it to ChatGPT. (It will show up as part of your asked question in the chat transcript.)

For example:

> _"Be concise", "always say I am not sure", or "I don't know", instead of adding information you are not sure about in your responses._

With alignment prompts you can reduce noise, get better quality responses, or for any other purpose that you need to repeat instructions to ChatGPT.

# Install

Clone the repo and open manifest from "about:debugging" in Firefox via install temporary extension.

# Thanks...

Thanks to ChatGPT for helping me build this.

