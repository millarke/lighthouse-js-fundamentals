/*
 * Programming Quiz: Umbrella (7-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

var umbrella = {
  color: "pink",
  isOpen: true,
  //isClosed: false,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    }
    else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
    close: function () {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    }
    else {
      umbrella.isOpen = false;
      return "Julia closed the umbrella";
    }
  }
};