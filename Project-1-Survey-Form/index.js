const fileSystem = require("browserify-fs")
var currentQuestion;

function onLoad(e){
	feather.replace();
}

function openQuestion(event, questionNum){
	currentQuestion = parseInt(questionNum.substring(1,2));
	if(currentQuestion > 5){
		questionNum = "q5";
		currentQuestion = 5;
	}
	if(currentQuestion < 1){
		questionNum = "q1";
		currentQuestion = 1;
	}
	$(".tabContent").hide();
	$("#" + questionNum).show();
	console.log(questionNum);
}

function handleSubmit(event){
	event.preventDefault();

	const data = new FormData(event.target);

	const values = Object.fromEntries(data.entries());

	console.log({values});
	$("#questionBar").hide();
	$("#questions").hide();
	$("#NavBar").hide();
}

document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");
	form.addEventListener('submit', handleSubmit);
});

function writeToJSON(values){
	const fileSystem = require("browserify-fs")
}
