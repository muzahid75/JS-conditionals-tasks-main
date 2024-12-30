/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
// Input: Age of the person and regular ticket fare
let age = 25; // Example age
let regularFare = 800; // Regular ticket fare in tk

// Declare a variable for the ticket fare
let ticketFare;

if (age < 10) {
    // Children under 10: free
    ticketFare = 0;
} else if (age >= 10 && age < 18) {
    // Students (assuming age 10-17): 50% discount
    ticketFare = regularFare * 0.5;
} else if (age >= 60) {
    // Senior citizens (age 60 or above): 15% discount
    ticketFare = regularFare * 0.85;
} else {
    // Everyone else: regular fare
    ticketFare = regularFare;
}

// Output the ticket fare
console.log("The ticket fare is: " + ticketFare + " tk");
