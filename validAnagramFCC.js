function anagram(stringA, stringB) {
  function createCharMap(text) {
    const charMap = {};

    for (const char of text) {
      if (charMap.hasOwnProperty(char)) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    return charMap;
  }

  if (stringA.length === stringB.length) {
    let stringAMap = createCharMap(stringA);
    let stringBMap = createCharMap(stringB);

    for (const char in stringAMap) {
      if (stringAMap[char] !== stringBMap[char]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(anagram('silent', 'listen'));
