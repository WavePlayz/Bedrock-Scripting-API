# Timer.js
Simple until module offer setTimeout and setInterval functionality.

## Usage
```
const timer = new Timer();

// Syntax
// timer.setTimeout(<func>, <ticksDelay>, [arguments])

// this will print the text to the chat 30 ticks after executing.
timer.setTimeout(function(text) {
    system.executeCommand(`/say ${text}!`, () => {});
}, 30, "hello world");



```
