// Code your solution in this file.
function lowerCaseDrivers(arr){
  return arr.map(obj => obj.toLowerCase());
};

function nameToAttributes(arr){
  return arr.map(name => {
    nameArr = name.split(" ")
    return {firstName: nameArr[0], lastName: nameArr[1]}
  })
};

function attributesToPhrase(arr){
  return arr.map(obj => `${obj.name} is from ${obj.hometown}`)
};
