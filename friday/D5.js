/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

console.log('........JS basics........');

/* Ex.A
   Create a variable test that contains a string
*/

const test = 'test';
console.log('Ex. A: ', test);

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/

const sum = 10 + 20;
console.log('Ex. B: ', sum);

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/

const randomNum = Math.floor(Math.random() * 21);
console.log('Ex. C: ', randomNum);

/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/

const me = {
  name: 'Drita',
  surname: 'Skeraj',
  age: 23
};
console.log('Ex. D: ', me);

/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/

delete me.age;
console.log('Ex. E: ', me);

/* Ex.F 
   Programmatically add to the object Me an array "skills" 
   that contains the programming languages that you know
*/

me.skills = ['Java', 'Javascript', 'PHP'];
console.log('Ex. F: ', me);

/* Ex.G 
   Programmatically remove the last skill from the array 
   "skills" inside of the "me" object
*/

me.skills.pop();
console.log('Ex. G: ', me.skills);

console.log('\n........JS functions........');
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/

const dice = () => Math.ceil(Math.random() * 6);
console.log('Ex. 1: ', dice());

/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/

const whoIsBigger = (a, b) =>{
  let biggest = a;
  if(b > a){
    biggest = b;
  }
  return biggest;
}
console.log('Ex. 2: ', whoIsBigger(12, 3));

/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every 
    word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/

const splitMe = (theString) =>{
  let result = theString.split(' ');
  return result;
}
console.log('Ex. 3: ', splitMe('I love coding'));

/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean 
    is true, should return the string without the first letter, otherwise should 
    remove the last one
*/

const deleteOne = (theString, theBoolean)=> {
  let result = theString;
  if(theBoolean){
    result = theString.slice(1);
  } else {
    result = theString.slice(0, theString.length -1);
  }
  return result;
}
console.log('Ex. 4: ', deleteOne('string', true));

/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and 
   returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

const onlyLetters = (input) =>{
  return input.replace(/[0-9]/g, '');
}
console.log('Ex. 5: ', onlyLetters('I love 123 whatever'));

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string 
   is a valid email.
*/

const isThisAnEmail = (email) =>{
  return email.includes('@');
}
console.log('Ex. 6: ', isThisAnEmail('testuser@gmail.com'));

/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/
const whatDayIsIt = () =>{
  const date = new Date();
  const dayNum = date.getDay();
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return days[dayNum-1];
}
console.log('Ex. 7: ', whatDayIsIt());

/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that 
    contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

const rollTheDices = (num) =>{
  let sum = 0;
  let values = [];
  let value = 0;

  for(let i = 0; i < num; i++){
    value = dice();
    sum += value;
    values.push(value);
  }
  let result = {
    sum: sum,
    values: values
  }
  return result;
}
console.log('Ex. 8: ', rollTheDices(3));

/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that 
   has passed since that day.
*/

const howManyDays = () =>{
  let date1 = new Date("09/28/2020"); 
  let date2 = new Date("10/02/2020"); 
  
  // To calculate the time difference of two dates 
  let timeDifference = date2.getTime() - date1.getTime(); 
    
  // To calculate the no. of days between two dates 
  let dayDifference = timeDifference / (1000 * 3600 * 24); 
  return dayDifference;
    
}
console.log('Ex. 9: ', howManyDays());

/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/

const IsTodayMyBDay = () =>{
  let bDay = new Date('July 04, 1997 23:15:30');console.log(bDay);
  let d2 = new Date();

  let month = bDay.getMonth() == d2.getMonth(); // true
  let day = bDay.getDay() == d2.getDay(); // true
  let result = (month && day) ? true : false;
  return result;
}
console.log('Ex. 10: ', IsTodayMyBDay());

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns 
   the object after deleting the property with that given name
*/

const deleteProp = (obj, str) =>{
  delete obj[str];
  return obj;
}

console.log('E. 11: ', deleteProp({name: 'Drita', surname: 'Skeraj', tel: 123}, 'tel'));


/* Movies array is an example array, used for the exs. Don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];


/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/

const olderMovies = (movies) =>{
  let result = { Year: 2100};

  for(let i = 0; i< movies.length; i++){
    let movie = movies[i];
    let currentYear = parseInt(movie.Year);
    if (currentYear < result.Year)
      result = movie;
  }
  return result;
}
console.log('Ex.12: ', olderMovies(movies));

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/
const countMovie = (movies) =>{
  return movies.length;
}
console.log('E13: ', countMovie(movies));

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/
const onlyTitles = (movies) =>{
  let titles = [];
  for(let i=0; i<movies.length; i++){
    titles.push(movies[i].Title);
  }
  return titles;
}
console.log('E14: ', onlyTitles(movies));

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/
const onlyThisMilenium = (movies) =>{
  let thisMilMovies = [];
  for( let i=0; i<movies.length; i++){
    if(parseInt(movies[i].Year) >= 2000){
      thisMilMovies.push(movies[i]);
    }
  }
  return thisMilMovies;
}

console.log('E15: ', onlyThisMilenium(movies));
/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/


/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/

/* Ex.19
    Write the function SearchAndDivide that receives 
    a string and returns an object with an array 
    "match" with all the movies that contains the 
    title and another array "nonMatch" with the other
     movies
*/

function searchAndDivide(str){
    let match = [];
    let nonMatch = [];
    for(let x = 0; x < movies.length; x++){
        if(movies[x].Title.includes(str)){
            match.push(movies[x]);
        } else {
            nonMatch.push(movies[x]);
        }
    }
    return {
        match: match,
        nonMatch: nonMatch
    };
};
console.log('Ex. 19: ', searchAndDivide('Avangers'));

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with
   that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/
function halfTree(h){
    let char = '*';
    for(let i=0; i<h; i++){
        for(let j=0; j<h; j++){
            console.log(char.repeat(i));
        }
    }
}
halfTree(5);

/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/
function Tree(h){
  const char = '*';
  const space = ' ';
  for(let x = 1; x <= h; x++){
    console.log(space.repeat(h - x) / char.repeat(x * 2 -1));
  }
}
Tree(3);

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/





