function capitalizedWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }

  const res = capitalizedWords(array.slice(0, -1));

  res.push(array.slice(array.length - 1)[0].toUpperCase());

  return res;
}

const words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
