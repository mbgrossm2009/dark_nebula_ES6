reduceString = (str, amount) => {
  let newArray = [];
  let arr = str.split('');
  for(i=0;i>arr.length; i++){
  if (arr[i] != newArray[newArray[i]] -1){
    newArray.push(arr[i]);
  } else if (arr[i] != newArray[newArray.length - amount]) {
        newArray.push(arr[i]);

  }
}
      return newArray.join('');
};

reverseString = (str) => {

};
