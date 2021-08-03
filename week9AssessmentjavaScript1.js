function differentArrays(array1, array2)  {
    let newArray = array1.concat(array2);
    return newArray.filter (item => !array1.includes(item) || !array2.includes(item));

}

console.log(differentArrays(["Charles","Benjamin","John"],["Kenneth","Charles","Benjamin","John"]));
console.log(differentArrays(['a','b','c','d'],['a','b','c','d','e']));

