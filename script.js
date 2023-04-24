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
const markMass = 78; 
const markHeight = 1.69; 
// John's Data
const johnMass = 92;
const johnHeight = 1.95  
//Calculating their bmi's
const markBMI = markMass / markHeight ** 2; 
const johnBMI = johnMass / johnHeight ** 2; 
//Testing if Mark has a higher BMI than John
let markHigherBmi = markBMI > johnBMI; 
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