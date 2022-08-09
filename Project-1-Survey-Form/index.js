var barColors = [
	"rgba(0, 0, 255, 1.0)",
	"rgba(0, 255, 0, 1.0)",
	"rgba(255, 0, 0, 1.0)",

];
var q1xValues = [];
var q1yValues = [];



var obj = {
	table: []
};

const fs = require("fs")
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

	writeToJSON(values);
}

document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");
	form.addEventListener('submit', handleSubmit);
	var charts = [
		new Chart("q1Chart", {
			type: "pie",
			data: {
				labels: q1xValues,
				datasets: [{
					backgroundColor: barColors,
					data: q1yValues
				}]
			},
			options: {
				title:{
					display: true,
					text: "Question 1: What is your favorite color?"
				}
			}
		}),
	
		new Chart("q2Chart", {
			type: "pie",
			data: {
				labels: q2xValues,
				datasets: [{
					backgroundColor: barColors,
					data: q2yValues
				}]
			},
			options: {
				title:{
					display: true,
					text: "Question 2: "
				}
			}
		}),
	
		new Chart("q1Chart", {
			type: "pie",
			data: {
				labels: q3xValues,
				datasets: [{
					backgroundColor: barColors,
					data: q3yValues
				}]
			},
			options: {
				title:{
					display: true,
					text: "Question 3: "
				}
			}
		}),
	
		new Chart("q1Chart", {
			type: "pie",
			data: {
				labels: q4xValues,
				datasets: [{
					backgroundColor: barColors,
					data: q4yValues
				}]
			},
			options: {
				title:{
					display: true,
					text: "Question 4: "
				}
			}
		}),
	
		new Chart("q1Chart", {
			type: "pie",
			data: {
				labels: q5xValues,
				datasets: [{
					backgroundColor: barColors,
					data: q5yValues
				}]
			},
			options: {
				title:{
					display: true,
					text: "Question 5: "
				}
			}
		})
	];
});

function writeToJSON(values){
	
	values.forEach(obj.table.push(values[i]));
	var json = JSON.stringify(obj);
	fs.writeFile('results.json', json, 'utf8', callback);

}

function fillResults(){
	
}
