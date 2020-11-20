function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// function areThereDuplicates(...args) {
//   // Two pointers
//   const collection = {};

//   for (const val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//   }

//   for (const key in collection) {
//     if (collection[key] > 1) return true;
//   }

//   return false;
// }

console.log(areThereDuplicates(1, 2, 2));
