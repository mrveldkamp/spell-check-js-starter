// Spell Check Starter

// Global Variables
let dictionary;
let aliceWordsCh1;
let aliceWordsFull;

// Load Data Files into Global Variables
loadDictionary();
loadAliceCh1();
loadAliceText();

// Event Listeners
document.getElementById("ch1-linear-btn").addEventListener("click", ch1Linear);
document.getElementById("ch1-binary-btn").addEventListener("click", ch1Binary);
document.getElementById("full-linear-btn").addEventListener("click", fullLinear);
document.getElementById("full-binary-btn").addEventListener("click", fullBinary);

// Event Functions
function ch1Linear() {
  // YOUR CODE HERE
  console.log("Ch. 1 Linear");
}

function ch1Binary() {
  // YOUR CODE HERE
  console.log("Ch. 1 Binary");
}

function fullLinear() {
  // YOUR CODE HERE
  console.log("Full Linear");
}

function fullBinary() {
  // YOUR CODE HERE
  console.log("Full Binary");
}