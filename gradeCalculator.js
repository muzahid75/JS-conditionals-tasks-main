/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// Input: Student's score
// let score = 85; // Example score

// // Determine grade
// if (score >= 90 && score <= 100) {
//     console.log("Your grade is A.");
// } else if (score >= 80 && score <= 89) {
//     console.log("Your grade is B.");
// } else if (score >= 70 && score <= 79) {
//     console.log("Your grade is C.");
// } else if (score >= 60 && score <= 69) {
//     console.log("Your grade is D.");
// } else if (score >= 0 && score < 60) {
//     console.log("Your grade is F.");
// } else {
//     console.log("Invalid score. Please enter a value between 0 and 100.");
// }

// Input: Student's score
let score = 0; // Example score (you can change this value)

// Calculate grade using switch
let grade;
switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A";
        break;
    case (score >= 80 && score < 90):
        grade = "B";
        break;
    case (score >= 70 && score < 80):
        grade = "C";
        break;
    case (score >= 60 && score < 70):
        grade = "D";
        break;
    case (score >= 0 && score < 60):
        grade = "F";
        break;
    default:
        grade = "Invalid score";
}

// Output the grade
console.log("The grade for a score of " + score + " is: " + grade);


