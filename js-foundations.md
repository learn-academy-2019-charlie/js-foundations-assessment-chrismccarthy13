# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
    There are 6 primitive data types: number, string, boolean, undefined, symbol, null.
    Other data types include objects which are composed of behavior and data.


2. What's the difference between =, ==, and === in JavaScript?
    The single = sign is the assignment operator.
    The double == sign is used as is equal to.
    The triple === sign is used as is equal to and equal data type.

3. What is the difference between an array's index and length?
    The arrays index is always going to start with 0 and will be one less than the length.
    The length will be equal to the number of values within the array.

4. What are the three parts of a for loop?
    The three parts of a for loop is the initializer list, the conditional check, and the post incrementer list.

5. What is a function's declaration, argument, and call?
    The function declaration is what defines the function with specific parameters.
    The argument is the code written within the function.
    The call is when you tell the function to run within your code.

6. What are the three main steps in saving work to github?
    The three main steps in saving work to github is git add ., git commit -m"", and git push

7. What is the terminal command to move directories?
    The terminal command to move directories is cd

8. Do you have a suggestion for a Check In question?
    If you could choose only one vacation destination what would it be?

9. What was your favorite topic this week?
    I really enjoyed learning the basics of react because it is such a powerful tool.

10. What was your "A-ha!" moment this week?
    My a-ha moment this week was doing the react assignment individually because it made me figure things out on my own.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
It will return undefined because there are two declarations of the variable text.

2. What is JSON? How does it relate to javascript objects?
    JSON stands for Javascript object notation and is a syntax for storing and exchanging data.

3. Describe a closure, what is it good for and how do you recognize one?
    A closure is a function which remembers the environment in which it was created. 
    You can recognize one when you see a function within a function.