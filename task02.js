"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = null;
// Try changing to "hello", 10, null, NaN

if (typeof userInput === "number" && !isNaN(userInput)) {
  console.log("It's a number");
} else {
  console.log("Not a number");
}
