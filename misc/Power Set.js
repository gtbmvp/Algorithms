const powerSet = function (n) {
  if (n == 0) return [[]];

  let result = [[]];
  for (let i = 1; i <= n; i++) {
    let temp = JSON.parse(JSON.stringify(result)); //deep clone array with array elements
    temp.forEach((elem) => elem.push(i));
    result = [...result, ...temp];
  }

  console.log(result);
};

// MIT example
function genSubsets(list) {
  if (list.length == 0) return [[]]; //base case of recursion

  let smaller = genSubsets(list.slice(0, list.length - 1)); //all subsets without last elem
  let extra = list.slice(-1); //last elem
  let newL = [];

  // add last elem in every smaller subset
  smaller.forEach((elem) => {
    newL.push([...elem, ...extra]);
  });
  return [...smaller, ...newL]; // return all smaller subsets and subset with last elem added
}
let result = genSubsets([0, 1, 2, 3]);
console.log(result);
