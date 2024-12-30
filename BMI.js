/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let weight = 70;
let height = 1.66;
// Calculate BMI using the formula
let bmi = weight / (height * height);

// Initialize health category
let category;

// Assign health category based on BMI value
if (bmi < 18.5) {
    category = "underweight";
} else {
    if (bmi <= 24.9) {
        category = "normal";
    } else {
        if (bmi <= 29.9) {
            category = "overweight";
        } else {
            category = "obese";
        }
    }
}

// Display the BMI and health category
console.log(`Your BMI is ${bmi.toFixed(2)}, and you are ${category}.`);
