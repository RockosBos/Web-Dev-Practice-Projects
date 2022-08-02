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

