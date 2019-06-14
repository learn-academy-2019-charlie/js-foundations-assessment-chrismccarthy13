// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
var x = function (a) {
  if(a % 3 === 0){
    return a + " is divisible by 3"
  } else {
    return a + " is not divisible by 3"
  }
}
console.log(x(9))
console.log(x(8))

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
var helloMe = {
  firstName: "Chris",
  lastName: "McCarthy",
  birthMonth: "September",
  birthYear: 1991,
  info: function () {
    return this.firstName + " " + this.lastName + " was born in " + this.birthMonth + " " + this.birthYear;
  }
}

console.log(helloMe.info())

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
var groceryList = ["apples", "spinach", "chicken", "eggs", "grapes"]

function getIndexes (item) {
  var length = item.length
  var median = length / 2

  if (length % 2 === 0) {
    median = median
  } else {
    median = Math.floor(median)
  }

  console.log(`First item: ${item[0]}`)
  console.log(`First item: ${item[median]}`)
  console.log(`First item: ${item[length - 1]}`)
}

console.log(getIndexes(groceryList))

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
alphabetSoup = (str) => {
    let newArr = str.toLowerCase().split("")
    return newArr.sort((a,b) => {
      return a>b? 1:-1
    }).join("")
  }

console.log(alphabetSoup("learn"));

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

animalNums = (arr1,arr2) => {
  let newArr =[]

  for (let i = 0; i <arr1 .length; i++) {
    newArr[i] = `${arr1[i]}-${arr2[i]}`
  }
  return newArr
}

console.log(animalNums(nums,nouns));

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
var num1 = [1,2,3,4,5]

timesFive = (arr) => {
  return arr.map(x => x*5)
}

console.log(timesFive(num1))