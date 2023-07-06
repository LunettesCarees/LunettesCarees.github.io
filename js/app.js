// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
// var textToSpeak = 'This is the text string that you will generate with your script';
// var speakButton = document.querySelector('button');

// Get the phrases
var phraseOneText = "";
var phraseTwoText = "";
var phraseThreeText = "";
var phraseFourText = "";
var phraseFiveText = "";

// Get the buttons
var phraseOneButton = document.querySelector('.btn-phrase-1');
var phraseTwoButton = document.querySelector('.btn-phrase-2');
var phraseThreeButton = document.querySelector('.btn-phrase-3');
var phraseFourButton = document.querySelector('.btn-phrase-4');
var phraseFiveButton = document.querySelector('.btn-phrase-5');

var speakButton = document.getElementById('speak');
var randomButton = document.getElementById('random');
var resetButton = document.getElementById('reset');

var starButton = document.getElementById('star');
var speakStarButton = document.getElementById('speak-star');

var pureStarStory = "";

var starStory = document.getElementById('star-story');


// The story paragraph
var story = document.getElementById('story');

const phraseOne = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const phraseTwo = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const phraseThree = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const phraseFour = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const phraseFive = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// Reset the phrases
function resetPhrase(int) {
	switch (int) {
		case 4:
			phraseTwoText = "";
			phraseThreeText = "";
			phraseFourText = "";
			phraseFiveText = "";
			break;
		case 3:
			phraseThreeText = "";
			phraseFourText = "";
			phraseFiveText = "";
			break;
		case 2:
			phraseFourText = "";
			phraseFiveText = "";
			break;
		case 1:
			phraseFiveText = "";
			break;
		default:
			phraseOneText = "";
			phraseTwoText = "";
			phraseThreeText = "";
			phraseFourText = "";
			phraseFiveText = "";
	}
}


// Randomize the story
function randomStory() {
	phraseOneText = phraseOne[Math.floor(Math.random() * phraseOne.length)];
	phraseTwoText = phraseTwo[Math.floor(Math.random() * phraseTwo.length)];
	phraseThreeText = phraseThree[Math.floor(Math.random() * phraseThree.length)];
	phraseFourText = phraseFour[Math.floor(Math.random() * phraseFour.length)];
	phraseFiveText = phraseFive[Math.floor(Math.random() * phraseFive.length)];
	story.textContent = phraseOneText + " " + phraseTwoText + " " + phraseThreeText + " " + phraseFourText + " " + phraseFiveText + ".";
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
// speakButton.onclick = function () {
// 	speakNow(textToSpeak);
// }

// Onclick handler for generating phrase one to five
phraseOneButton.onclick = function () {
	phraseOneText = phraseOne[Math.floor(Math.random() * phraseOne.length)];
	speakNow(phraseOneText);
	story.textContent = phraseOneText;
	resetPhrase(4);
}

phraseTwoButton.onclick = function () {
	phraseTwoText = phraseTwo[Math.floor(Math.random() * phraseTwo.length)];
	speakNow(phraseTwoText);
	if (phraseOneText) {
		story.textContent = phraseOneText + " " + phraseTwoText;
		resetPhrase(3);
	}
}

phraseThreeButton.onclick = function () {
	phraseThreeText = phraseThree[Math.floor(Math.random() * phraseThree.length)];
	speakNow(phraseThreeText);
	if (phraseOneText && phraseTwoText) {
		story.textContent = phraseOneText + " " + phraseTwoText + " " + phraseThreeText;
		resetPhrase(2);
	}
}

phraseFourButton.onclick = function () {
	phraseFourText = phraseFour[Math.floor(Math.random() * phraseFour.length)];
	speakNow(phraseFourText);
	if (phraseOneText && phraseTwoText && phraseThreeText) {
		story.textContent = phraseOneText + " " + phraseTwoText + " " + phraseThreeText + " " + phraseFourText;
		resetPhrase(1);
	}
}

phraseFiveButton.onclick = function () {
	phraseFiveText = phraseFive[Math.floor(Math.random() * phraseFive.length)];
	speakNow(phraseFiveText);
	if (phraseOneText && phraseTwoText && phraseThreeText && phraseFourText) {
		story.textContent = phraseOneText + " " + phraseTwoText + " " + phraseThreeText + " " + phraseFourText + " " + phraseFiveText + ".";
	}
}

// Onclick handler for the button that speaks the text
speakButton.onclick = function () {
	if (phraseOneText && phraseTwoText && phraseThreeText && phraseFourText && phraseFiveText) {
		speakNow(story.textContent);
	}
}

// Onclick handler for the button that randomizes the story
randomButton.onclick = function () {
	randomStory();
	story.textContent = phraseOneText + " " + phraseTwoText + " " + phraseThreeText + " " + phraseFourText + " " + phraseFiveText + ".";
	speakNow(story.textContent);
}

// Onclick handler for the button that resets the story
resetButton.onclick = function () {
	resetPhrase();
	story.textContent = "Story appears here...";
	speakNow("Reset");
}

// Onclick handler for the button that stars/saves the story
starButton.onclick = function () {
	if (phraseOneText && phraseTwoText && phraseThreeText && phraseFourText && phraseFiveText) {
		pureStarStory = story.textContent;
		starStory.textContent = "⭐ " + story.textContent + " ⭐";
		speakNow("starred");
	}
}

// Onclick handler for the button that speaks the starred story
speakStarButton.onclick = function () {
	if (starStory.textContent) {
		speakNow(pureStarStory);
	}
}