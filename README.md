# Stride JS
Stride js is parallax module to be used with jQuery. It simply affects the background position based on position from top of screen. This module is also using underscores js throttle function however any javascript utility library can be implemented with ease.

## Beta
This module is currently in testing and should not be used in production

## Up and Running
```javascript
$('[data-stride]').stride({
    backgroundX: 50,
    backgroundY: 50,
    backgroundAcceleration:-20
});
```

##Options
Background x position
Background y position
Background acceleration
(can also be used as data attributes)

`<div data-stride-x="50" data-stride-y="50" data-stride-acceleration="-10"></div>`