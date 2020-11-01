function countUniqueValues(iterable) {
  return new Set(iterable).size;
}

countUniqueValues(['a', 1, 'a', 2, '1']);
