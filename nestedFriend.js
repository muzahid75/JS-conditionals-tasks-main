/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
// Input: Your score and your friend's score
let yourScore = 85; // Example: Your score
let friendScore = 75; // Example: Friend's score

    if (yourScore > 80) {
        // Check friend's score if your score is greater than 80
        if (friendScore > 80) {
            console.log("Both scored well. Go for lunch together!");
        } else if (friendScore >= 60) {
            console.log("Tell your friend, 'Good luck next time.'");
        } else if (friendScore >= 40) {
            console.log("Keep your friend's message unseen.");
        } else {
            console.log("Block your friend.");
        }
    } else {
        // Your score is less than or equal to 80
        console.log("Go home, sleep, and act sad.");
    }

