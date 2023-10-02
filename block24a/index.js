// What we know about functional programming:
// Is a programming paradigm that emphasizes the use of pure functions and immutable data.
//FIRST CLASS FUNCTION TAB - 3 PROBLEM STATEMENT
//1.Assign a function to a variable and use it to convert a string to uppercase:

const assigningFunction = function (str) {
  return str.toUpperCase();
};
console.log(assigningFunction("Welcome"));

  //2.Create a function that takes a number as input and returns another function that multiplies its input with the original number:
 
  function multiplierDisplay(a) {
    return function (b) {
      return a * b;
    };
  }
  const double = multiplierDisplay(3);
  console.log(double(7));

  //3.Create a function that takes two numbers as input and returns an object with specific properties:
  function createFunction() {
      return function (num1, num2) {
        const result = {
          operation1: num1 + 2,
          operation2: num2 + 4,
        };
        return result;
      };
    }
  const adding2And4 = createFunction(2, 4);
  const input1 = 5;
  const input2 = 5;
  const result = adding2And4(input1, input2);
  console.log(result);

  // Higher- Order Function
  
  //Write a higher-order function that takes an array and a modifying function as arguments. The higher-order function should modify each element in the input and return a new array containing the modified elements.
  //1. Converts all string elements to lowercase

function higherOrderFunc(arr, modifyFunc) {
  const modifiedArray = [];
  for (let i = 0; i < arr.length; i++) {
    modifiedArray.push(modifyFunc(arr[i]));
  }
  return modifiedArray;
}
const modifiedArray = higherOrderFunc(
  ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"],
  function (str_modified) {
    return str_modified.toLowerCase();
  }
);
console.log(modifiedArray);

//2. String length More than 11

function filterStringChar(stringGiven, condition) {
  return stringGiven.filter(condition);
}

function hasMoreThanElevenChars(string) {
  return string.length > 11;
}

const stringArray = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];

const filteredStringArray = filterStringChar(
  stringArray,
  hasMoreThanElevenChars
);

console.log(filteredStringArray);


//3. Reverse String

function modifyGivenStrings(stringArray, callbackFunction) {
  return stringArray.map(callbackFunction);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const stringArray = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];

const modifiedTheStrings = modifyGivenStrings(stringArray, reverseString);

console.log(modifiedTheStrings);

//Runner 

const createRunner = (speed) => (name) => {
  return {
    name,
    speed,
    location: 0,
    move: function () {
      this.location += speed;
    },
  };
};

const createFastRunner = createRunner(7);
const createSlowRunner = createRunner(3);

const foo = createFastRunner("FOO");
const bar = createSlowRunner("BAR");

function race(runner1, runner2, raceDistance) {
  runner1.location = 0;
  runner2.location = 0;

  while (runner1.location < raceDistance && runner2.location < raceDistance) {
    runner1.move();
    runner2.move();
  }

  if (runner1.location >= raceDistance && runner2.location >= raceDistance) {
    return "It's a tie!";
  } else if (runner1.location >= raceDistance) {
    return `${runner1.name} wins!`;
  } else {
    return `${runner2.name} wins!`;
  }
}

console.log(race(foo, bar, 100));
