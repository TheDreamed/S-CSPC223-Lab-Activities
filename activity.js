//Code for Question 1
function countVowels(word){
    wordSplit =  word.split('')
    vowels='aeiou'
    count = 0;

    for(let i = 0; i < wordSplit.length; i++)
    {
        if(vowels.includes(wordSplit[i]))
        count++
    }
    console.log(`The number of vowels in this string is: ${count}`)
}
console.log("Question #1 \n")
countVowels('Hakdog')

//Code for Question 2
function baseExp(b, n){
    bn = b**n;
    console.log(`The Value of bn is ${bn}`);
}
console.log("Question #2 \n")
baseExp(10, 2);

//Code for Question 3
function countOccurence(word, letter){
    wordSplit =  word.split('')
    count = 0;

    for(let i = 0; i < wordSplit.length; i++)
    {
        if(letter.includes(wordSplit[i]))
        count++
    }
    console.log(`The number of "${letter}" in this string is: ${count}`)
}
console.log("Question #3 \n")
countOccurence('hahahahhaah', 'a')

//Code for Question 4
function fizzBuzz(){
    for(let i = 1; i < 101; i++)
    {
        if(i % 3 === 0 && i % 5 !== 0){
        console.log(`${i} Fizz`)
        }
        else if(i % 3 !== 0 && i % 5 === 0){
        console.log(`${i} Buzz`)
        }
        else if(i % 3 === 0 && i % 5 === 0){
            console.log(`${i} Fizz Buzz`)
        }
        else
        console.log(i);
    }
}
console.log("Question #4 \n")
fizzBuzz()

//Code for Question 5
console.log("Question #5 \n")
function isArmstrong(number) {
    // Convert to string to access individually
    const strNum = number.toString();

    // Calculate the sum of the cubes of each digit
    let sum = 0;
    for (let i = 0; i < strNum.length; i++) {
    // ParseInt to convert the strNum and run the equation
      const digit = parseInt(strNum[i]);
      sum += digit ** 3;
    }
    // Check if the sum is equal to the original number
    return sum === number;
  }

  // Find all the Armstrong numbers of three digits and push it to the list.
  const armstrongNumbers = [];
  for (let i = 100; i < 1000; i++) {
    //Use the loop above to check if sum === i
    if (isArmstrong(i)) {
      armstrongNumbers.push(i);
    }
  }

  // Output the Armstrong numbers
  console.log(`The Armstrong numbers of three digits are: ${armstrongNumbers.join(', ')}`);


isArmstrong(371)


console.log("Question #6 \n")
//Code for Question 6
//Create a dictionary for students name and their marks.
let students = [
    {name: 'David', mark : 80},
    {name: 'Vinoth', mark : 77},
    {name: 'Divya', mark : 88},
    {name: 'Ishitha', mark : 95},
    {name: 'Thomas', mark : 68}
];

let totalMark = 0;

for(let i = 0; i < students.length; i++)
{
    totalMark += students[i].mark;
}

let averageMark = totalMark / students.length;

//Assign grade

for(let i = 0; i<students.length; i++)
{
    let grade;
    if(students[i].mark < 60)
    {
        grade = 'F';
    }
    else if(students[i].mark < 70)
    {
        grade = 'D';
    }
    else if(students[i].mark < 80)
    {
        grade = 'C';
    }
    else if(students[i].mark < 90)
    {
        grade = 'B';
    }
    else if(students[i].mark <= 100)
    {
        grade = 'A';
    }
    console.log(`Student ${students[i].name} got a mark of ${students[i].mark}, and will be given a grade of ${grade}`)
}
console.log(`The average mark is ${averageMark}`)


// Code for #7
console.log("Question #7 please refer to numberSeven.html \n")
var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";

   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}

//Code for Question 8
function findLeap(startYear, endYear){

let leapYears = [];
for(let i = startYear;  i <= endYear; i++)
{
    if((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0)
    {
        leapYears.push(i);
    }

}
console.log(`The leap years from ${startYear} to ${endYear} are the following: ${leapYears}`);
}

findLeap(2000, 2012);
