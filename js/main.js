// Spell Check Starter by Mr. V

"use strict";

// Global Variables
let dictionary;
let aliceWordsCh1;
let aliceWordsFull;

// Load Data Files into Global Variables
loadDictionary();
loadAliceCh1();
loadAliceText();

// Event Listeners
document.getElementById("linear-word-btn").addEventListener("click", linearWord);
document.getElementById("binary-word-btn").addEventListener("click", binaryWord);
document.getElementById("ch1-linear-btn").addEventListener("click", ch1Linear);
document.getElementById("ch1-binary-btn").addEventListener("click", ch1Binary);
document.getElementById("full-linear-btn").addEventListener("click", fullLinear);
document.getElementById("full-binary-btn").addEventListener("click", fullBinary);

// Event Functions
function linearWord() {
  // Get user word and check if it is in the dictionary using a linear search
  let userWord = document.getElementById("word").value;
  userWord = userWord.toLowerCase();

  let searchResult = linearSearch(dictionary, userWord);
  if (searchResult == -1) {
    document.getElementById("word-result").innerHTML = "Linear Search: " + userWord + " is NOT in the dictionary.";
  } else {
    document.getElementById("word-result").innerHTML = "Linear Search: " + userWord + " IS in the dictionary.";
  }
}

function binaryWord() {
  // Get user word and check if it is in the dictionary using a binary search
  let userWord = document.getElementById("word").value;
  userWord = userWord.toLowerCase();

  let searchResult = binarySearch(dictionary, userWord);
  if (searchResult == -1) {
    document.getElementById("word-result").innerHTML = "Binary Search: " + userWord + " is NOT in the dictionary.";
  } else {
    document.getElementById("word-result").innerHTML = "Binary Search: " + userWord + " IS in the dictionary.";
  }
}

function ch1Linear() {

}

function ch1Binary() {

}

function fullLinear() {

}

function fullBinary() {

}