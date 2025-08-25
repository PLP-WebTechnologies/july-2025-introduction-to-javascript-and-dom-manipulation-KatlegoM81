// Part 1: Variables & Conditionals
// ======================
let userName = "Katlego";
let userAge = 23;

// Conditional check
if (userAge >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is a minor.");
}


// Part 2: Custom Functions
// ======================

// Function 1: Display greeting in the DOM
function greetUser(userName) {
    document.getElementById("message").textContent = "Hello, " + userName + "! Welcome to the project list.";
}

// Function 2: Add numbers to the list in the DOM
function generateNumbers(limit) {
    let list = document.getElementById("numberList");
    list.innerHTML = ""; // clear old list
    for (let i = 1; i <= limit; i++) {
        let li = document.createElement("li");
        li.textContent = "Number " + i;
        list.appendChild(li);
    }
}


// Part 3: Loops Examples
// ======================

// Loop 1: For loop
for (let i = 1; i <= 3; i++) {
    console.log("For loop iteration: " + i);
}

// Loop 2: While loop
let counter = 0;
while (counter < 3) {
    console.log("While loop count: " + counter);
    counter++;
}


// Part 4: DOM Interactions
// ======================

// DOM Interaction 1: Button click event
document.getElementById("greetBtn").addEventListener("click", function () {
    greetUser(userName); // Call function
});

// DOM Interaction 2: Insert greeting into <p> tag (done in greetUser)

// DOM Interaction 3: Populate the list dynamically
generateNumbers(5);