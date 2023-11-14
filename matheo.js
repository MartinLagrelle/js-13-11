function ArrayAvg(myArray) {
    let i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
      summ = summ + myArray[i++];
    }
    return summ / ArrayLen;
  }
  let myArray = [15.4, 9.2, 16.1, 12.6];
  let a = ArrayAvg(myArray);
  console.log(a)


