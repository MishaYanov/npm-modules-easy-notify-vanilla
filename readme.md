# Easy Notification Packgae
------------------------------

## Description
This package is doing somthing you are probablily to lazy to do and this is apply pretty good looking notifications, with the easiest setup you can possibly imagine.

## instalation

```
 npm i easy-notify-vanilla
```

### Setup

to use the notification import the one and only function:

```javascript
import { notify } from 'easy-notify-vanilla';
```

### How to use it
__________________

#### Must have:
---------------
the first object is a must have which will provide you with the simplest notification possible

type: the type of the notification - can be: "success" | "error" | "warning" | "info"

message: "this is a message" can be what ever you want

Example:
```javascript
notify({type: "success", message: "Hello World"});
```

#### Optional values:
---------------------

in optional values you can add diffrent configurations that you may need or not, this is a diffrent objectin the function call and it has the next values:

isIcon: = true/false - each type has it's own specific icon;
  
timeout: number - this is configured is ms => 1s = 1000ms

position: you can change the position of the notification: 
"top-left" | "top-right" | "bottom-left" | "bottom-right"

isCloseButton: = true/false - add a close button that can close the notification.

isProgress: true/false - adds a progress bar for the time that the notification is working.

top: false/number - distance from top if false defualt value.

bottom: false/number - distance from bottom if false defualt value.

left?: false/number - distance from left if false defualt value.

right?: false/number - distance from right if false defualt value.

height?: false/number - custom height if false defualt value.

width?: false/number - custom width if false defualt value.

##### Examples:
---------------

```javascript
  notify({type: "success", message: "Hello World"},{isProgress: true, isIcon: true, isCloseButton: true})
```

```javascript
  notify({type: "info", message: "Hello World"},{position: "bottom-left", isIcon:true, isCloseButton: true})
```

```javascript
  notify({type: "error", message: "Hello World"},{position: "top-right", isProgress: true, isCloseButton: true})

```

##### Github:

```
[Link to Github](https://github.com/MishaYanov/npm-modules-easy-notify-vanilla)
```