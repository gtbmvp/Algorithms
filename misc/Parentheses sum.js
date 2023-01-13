function sum(a) {
  let result = a;

  return function addMore(b) {
    if (b === undefined) return result;
    else {
      result += b;
      return addMore;
    }
  };
}

