const toUpper = (str = "") => {
  console.log(str);
  const arr = str.split(" ");
  let result = "";
  console.log(arr);
  console.log(
    arr.forEach((words) => {
      result += words[0].toUpperCase() + " " + words.substring(1) + " ";
      console.log(words[0].toUpperCase() + words.substring(1));
    })
  );

  return result;
};

console.log(toUpper("am robot"));
