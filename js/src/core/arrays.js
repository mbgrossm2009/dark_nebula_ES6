removeWithoutCopy = (arr, item) => {
for(let i = arr.length; i > 0; i--)
if (arr[i] === item) {
  arr.splice(i, 1);
}
return arr;
};

append = (arr, item) => {
  arr.push(item);
  return arr;

};

truncate = (arr) => {
  arr.pop();
  return arr;
};


prepend = (arr, item) => {
arr.unshift(item);
return arr;
};

curtail = (arr) => {
arr.shift();
return arr;
};

concat = (arr1, arr2) => {

  let arr3 = arr1.concat(arr2);
  return arr3;

};

insert = (arr, item) => {
  arr.splice(2,0,item);
  return arr;

};

count = (arr, item) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {count++};
  }
  return count;

};

duplicates = (arr) => {
 sortedArray=arr.sort();
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] == arr[i]) {
        newArr.push(sortedArray[i]);
  }
  if (newArr[newArr.length - 2] == arr[i]) {
       newArr.splice(newArr.length - 1, 1)
     }
   }

return newArr;
};



square = (arr) => {
  squaredArray = []
  for (let i = 0; i <arr.length; i++) {
    squaredArray.push(arr[i]*arr[i]);
    // get each element of array
    // multyply by itself
  }
  return squaredArray
};


findAllOccurrences = (arr, item) => {

  return arr.reduce(function(arrayBeingCreated, e, i) {
    if (e === item)
        arrayBeingCreated.push(i);
    return arrayBeingCreated;
  }, []);



};
