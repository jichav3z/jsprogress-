/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

//This is the first data set
//Mark's Data
// const markMass = 78; 
// const markHeight = 1.69; 
// // John's Data
// const johnMass = 92;
// const johnHeight = 1.95  
// //Calculating their bmi's
// const markBMI = markMass / markHeight ** 2; 
// const johnBMI = johnMass / johnHeight ** 2; 
// //Testing if Mark has a higher BMI than John
// if (markBMI > johnBMI) {
//     console.log(`Mark\'s BMI (${markBMI.toFixed(1)}) is higher than John\'s (${johnBMI.toFixed(1)})!`);
// } else if (johnBMI > markBMI) {
//     console.log(`John\'s BMI (${johnBMI.toFixed(1)}) is higher than Mark\'s (${markBMI.toFixed(1)})!`);
// } else {
//     console.log(`Mark\'s BMI (${markBMI.toFixed(1)}) is the same as John\'s (${johnBMI.toFixed(1)})!`);
// }





/*
//Logging the results
console.log(markBMI, johnBMI, markHigherBmi);
//This is the second data set   
//Mark's Data
const markMassTwo = 95;
const markHeightTwo = 1.88;
//John's Data
const johnMassTwo = 85;
const johnHeightTwo = 1.76;
//Calculating their bmi's
const markBMITwo = markMassTwo / markHeightTwo ** 2;
const johnBMITwo = johnMassTwo / johnHeightTwo ** 2;
//Testing if Mark has a higher BMI than John
let markHigherBmiTwo = markBMITwo > johnBMITwo;
//Logging the results
console.log(markBMITwo, johnBMITwo, markHigherBmiTwo);
*/



/*
const firstName = 'Jared';

const jaredNew = `I'm ${firstName}`;
console.log(jaredNew);


//write a program that checks whether a person is allowed to have a driver's license or not
// and if they are it will print it to the console

const age = 15;
const isOldEnough = age >= 18; 

if (isOldEnough) {
    console.log('Sarah can start getting her driving license ');
} else { 
    const yearsLeft = 18 - age; 
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012; 

let century;

if (birthYear <= 2000) {
    century = 20;
} else { 
    century = 21;
}
console.log(century);
*/

//type conversion
// const inputYear = '1991';
// console.log(Number(inputYea), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jared'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log('I am ' + 23 + ' years old');

//How Logical Operators Work in JavaScript
// const hasDriversLicense = true; //A 
// const hasGoodVision = true; //B 
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision; 
// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// } 

// const isTired = false; //C
// console.log(hasDriversLicense && hasGoodVision && !isTired);
/* 
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/ 
// Average Score for Dolphins 
const dolphinsAvgScore = (96 + 108 + 89) / 3; 
const koalasAvgScore = (88 + 91 + 110) / 3; 
//Score Calculation for Both Teams 
if (dolphinsAvgScore > koalasAvgScore) { 
    console.log(`Dolphins win with ${dolphinsAvgScore.toFixed(1)}!`)
} else if (koalasAvgScore > dolphinsAvgScore) { 
    console.log(`Koalas win with ${koalasAvgScore.toFixed(1)}!`)
} else if (dolphinsAvgScore === koalasAvgScore) {
    console.log('It\'s a draw!'); 
} 

//Bonus 1 
//Average Scores 
const dolphinsAvgScoreBonus = (97 + 112 + 101) / 3;
const koalasAvgScoreBonus = (109 + 95 + 123) / 3; 
//Score Calculation for Both Teams
if (dolphinsAvgScoreBonus > koalasAvgScoreBonus && dolphinsAvgScoreBonus >= 100) {
    console.log(`Dolphins win with ${dolphinsAvgScoreBonus.toFixed(1)}!`)
} else if (koalasAvgScoreBonus > dolphinsAvgScoreBonus && koalasAvgScoreBonus >= 100) {
    console.log(`Koalas win with ${koalasAvgScoreBonus.toFixed(1)}`)
} else if (dolphinsAvgScoreBonus === koalasAvgScoreBonus && dolphinsAvgScoreBonus >= 100 && koalasAvgScoreBonus >= 100) {
    console.log('It\'s a draw!'); 
}

//Bonus 2 
//Average Scores 
const dolphinsAvgTwo = (97 + 112 + 101) / 3; 
const koalasAvgTwo = (109 + 95 + 106) / 3;
//Score Calculation for Both Teams
if (dolphinsAvgTwo > koalasAvgTwo && dolphinsAvgTwo >= 100) {
    console.log(`Dolphins win with ${dolphinsAvgTwo.toFixed(1)}!`)
} else if (koalasAvgTwo > dolphinsAvgTwo && koalasAvgTwo >= 100) {
    console.log(`Koalas win with ${koalasAvgTwo.toFixed(1)}`)
} else if (dolphinsAvgTwo === koalasAvgTwo && dolphinsAvgTwo >= 100 && koalasAvgTwo >= 100) {
    console.log('It\'s a draw!');
}