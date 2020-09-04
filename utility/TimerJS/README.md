# Timer.js
Simple util module offering setTimeout and setInterval functionality.

## Usage
```javascript
const timer = new Timer();

// Syntax
// timer.setTimeout(<func>, <ticksDelay>, [arguments])

// this will print the text to the chat 30 ticks after executing.
timer.setTimeout(function(text) {
    system.executeCommand(`/say ${text}!`, () => {});
}, 30, "hello world");



```
