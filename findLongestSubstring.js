function findLongestSubString(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    // index - beggining of substring + 1 (to include current i)
    longest = Math.max(longest, i - start + 1);

    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }

  return longest;
}

console.log(findLongestSubString('thisisawesome')); // 6, without repeating characters
