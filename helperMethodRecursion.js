function outer(input) {
  const outerScopedVariable = [];

  function helper(helperInput) {
    //modify the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);

  return outerScopedVariable;
}
