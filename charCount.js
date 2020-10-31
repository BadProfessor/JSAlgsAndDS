// Write a function which takes in a string and returns counts of each character in the string.

// function charCount(str) {
//   // make object to return at end
//   // loop over string, for each character...
//   ////if the char is a number/letter AND is a key in object, add one to count
//   ////if the char is a number/letter AND is not in object, add it to the object and set value to 1
//   ////if character is something else (space, period, etc.) don't do anything
//   // return object at end
// }

// function charCount(str) {
//   // Do something
//   // return object with keys that are lowercase alphanumeric characters in the string;
// }

// charCount('aaaa');
// charCount('hello');
// charCount('Your PIN number is 1234!');

// charCount('aaaa'); // return {a:4}
// charCount('hello'); // {h: 1, e: 1, l:2, o:3}

// ('my phone number is 182763');
// ('Hello hi');

// charCount('');
// charCount();

function charCount(str) {
  // make object to return at end
  const result = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    ////if the char is a number/letter AND is a key in object, add one to co`unt
    if (result[char] > 0) {
      result[char]++;
    }
    ////if the char is a number/letter AND is not in object, add it to the object and set value to 1
    else {
      result[char] = 1;
    }
  }
  ////if character is something else (space, period, etc.) don't do anything
  // return object at end
  return result;
}

charCount('hello');
charCount('Hi there!');
