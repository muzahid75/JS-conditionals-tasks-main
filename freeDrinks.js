/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// let burger = 550;
// if(burger>500){
//     console.log("free Coke");
// }else{
//     console.log("30 tk");
// }

function checkFreeDrinks(burgerPrice) {
    if (burgerPrice > 500) {
        console.log("You get a free Coke!");
    } else {
        console.log("Coke costs 30tk.");
    }
}

// Example usage:
checkFreeDrinks(600); // Outputs: "You get a free Coke!"
checkFreeDrinks(400); // Outputs: "Coke costs 30tk."

