/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = (a, b) => a * b;
console.log(`E1: a=2, b=3, area=${area(2, 3)}`);

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = (int1, int2) =>{
    if(int1 === int2){
        return (int1 + int2) * 3;
    } else {
        return '.::ERROR::. the given numbers are not equal';
    }
}
console.log(`E2: int1=int2=5: ${crazySum(5, 5)}`);

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = (a, b=19) =>{
    let result;
    if(a > b){
        result = (a-b) * 3;
    }else{
        result = '.::ERROR::. a should be greater than b';
    }
    return result;
}
console.log(`E3: a=25, b=19, crazyDiff=${crazyDiff(25)}`);

// function crazyDiff2(num){
//     let difference = num -19;
//     if(difference < 0){
//         difference = -difference;
//     }
//     if (num < 19){
//         difference = difference * 3;
//     }
//     return difference;
// }




/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true 
if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = (n) => {
    if (n===400 || (n >= 20 && n <= 100)){
        return true;
    } else {
        return false;
    }
}
console.log(`E4: n=50, boundary=${boundary(50)}`);

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in 
front of a given string, if the given string begins with "Strive" 
then return the original string.
*/

const strivify = (s) =>{
    let result = '';
    if(s.startsWith('Strive')){
        result = s;
    } else {
        result = 'Strive' + s;
    }
    return result;
}
console.log(`E5: test=>${strivify('test')}`);

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if 
it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (int) =>{
    let result = false;
    if(((int % 3) === 0) || ((int % 7) === 0)){
        result = true;
    }
    return result;
}

console.log(`E6: check3and7(21): ${check3and7(21)}`);

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string 
(es.: Strive => evirtS).
*/

const reverseString = (theString) =>{
    let reversedString = '';
    for(let i=theString.length; i >= 0; i--){
        reversedString+=theString.charAt(i);
    }
    return reversedString;
}
console.log(`E7: string: ${reverseString('string')}`);

// function reverseString(word){
//     return word.split('').reverse().join('');
// }

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of 
a given string passed as parameter
*/

const upperFirst = (theString) =>{
    let stringArray = theString.split(' ');
    let capitalizedStringArray = [];
    let word = '';
    let finalSentence = '';
    for(let i=0; i<stringArray.length; i++){
        word = stringArray[i];
        word = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedStringArray.push(word);
    }
    finalSentence += capitalizedStringArray.join(' ');
    return finalSentence;
}
console.log('E8: ', upperFirst('capitalize the first letter'));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = (theString) =>{
    return theString.substring(1, theString.length -1);
    //return theString.substr(1).slice(0, theString.length -2);
}
console.log('E9: function=', cutString('function'));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

const giveMeRandom = (n) =>{
    let array = [];
    let element = 0;
    for(let i=0; i < n; i++){
        element = Math.random() * 10;
        element = parseInt(element);
        array.push(element);
    }
    return array;
}
console.log('E10: ', giveMeRandom(15));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
