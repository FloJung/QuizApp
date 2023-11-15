
// git add .
// git commit -m "first commit"
// git push

let questions = [
    {
        "question": "Was ist die Hauptfunktion der DNA?",
        "answer_1": "Energieproduktion",
        "answer_2": "Informationsspeicherung",
        "answer_3": "Blutgerinnung",
        "answer_4": "Muskelkontraktion",
        "right-answer": 2
    },
    {
        "question": "Wer ist der Autor von 'Die Verwandlung'?",
        "answer_1": "Hermann Hesse",
        "answer_2": "Franz Kafka",
        "answer_3": "Thomas Mann",
        "answer_4": "Friedrich Nietzsche",
        "right-answer": 2
    },
    {
        "question": "Welches Element hat das chemische Symbol 'O'?",
        "answer_1": "Sauerstoff",
        "answer_2": "Eisen",
        "answer_3": "Gold",
        "answer_4": "Kohlenstoff",
        "right-answer": 1
    },
    {
        "question": "In welchem Jahr wurde die Berliner Mauer errichtet?",
        "answer_1": "1945",
        "answer_2": "1956",
        "answer_3": "1961",
        "answer_4": "1973",
        "right-answer": 3
    },
    {
        "question": "Was ist die Funktion des HTML-Tags <a>?",
        "answer_1": "Abbreviation",
        "answer_2": "Anchor",
        "answer_3": "Article",
        "answer_4": "Audio",
        "right-answer": 2
    },
    {
        "question": "Was ist die Hauptkomponente von Guacamole?",
        "answer_1": "Tomaten",
        "answer_2": "Avocado",
        "answer_3": "Zwiebeln",
        "answer_4": "Paprika",
        "right-answer": 2
    },
    {
        "question": "Welcher Planet ist der vierte in unserem Sonnensystem?",
        "answer_1": "Mars",
        "answer_2": "Jupiter",
        "answer_3": "Venus",
        "answer_4": "Saturn",
        "right-answer": 1
    }    
];

let currentQuestion = 0;
let rightQuestions = 0;

let AUDIO_SUCCESS = new Audio('sound/success.mp3');
let AUDIO_WRONG = new Audio('sound/worng.mp3');


function render() {
    showQuestion();
    enableQuestion();
}


function restartGame() {
    currentQuestion = 0;
    rightQuestions = 0;
    document.getElementById('completeQuiz').innerHTML = restartGameHTML(); 
  render();
}

function showQuestion() {
    if(gameIsOver()) {
        showEndScreen();
    }else {    
        showNextQuestion();
    }
}


function gameIsOver() {
   return currentQuestion >= questions.length;
}


function answer(selection) {
    let selectedQuestionNumber = selection.slice(-1);
    let rightAnswer = questions[currentQuestion]['right-answer'];
    let idOfRightAnswer = `answer_${rightAnswer}`;
    if(rightAnswerSelected(selectedQuestionNumber,rightAnswer)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;    
    }else {
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        AUDIO_WRONG.play();
    }
    disabledQuestion();
    document.getElementById('nextButton').disabled = false;
    updateProgressBar();
}


function rightAnswerSelected(selectedQuestionNumber,rightAnswer) {
  return  selectedQuestionNumber == rightAnswer;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    
    resetAnswerButton();
    showQuestion();
}


function previousQuestion() {
    if(currentQuestion > 0){
        currentQuestion--;
    }
    showQuestion();
}


function resetAnswerButton() {
    for (let i = 1; i <= 4; i++) {
        const answerElement = document.getElementById('answer_' + i);
        const parentNode = answerElement.parentNode;
        
        parentNode.classList.remove('bg-success');
        parentNode.classList.remove('bg-danger');
        enableQuestion();
    }
}


function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progressBar').innerHTML = `${percent} %`
    document.getElementById('progressBar').style = `width: ${percent}%`
    console.log(percent);
}


function showNextQuestion() {
    let question = questions[currentQuestion];
    
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function showEndScreen() {
    document.getElementById('completeQuiz').innerHTML = EndScreenHTML();
    document.getElementById('amountOfQuestions').innerHTML = questions.length;
    document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
}


function disabledQuestion() {
    document.getElementById('answer1').removeAttribute("onclick");
    document.getElementById('answer2').removeAttribute("onclick"); 
    document.getElementById('answer3').removeAttribute("onclick");
    document.getElementById('answer4').removeAttribute("onclick");
}


function enableQuestion() {
    document.getElementById('answer1').setAttribute("onclick", "answer('answer_1')");
    document.getElementById('answer2').setAttribute("onclick", "answer('answer_2')");
    document.getElementById('answer3').setAttribute("onclick", "answer('answer_3')");
    document.getElementById('answer4').setAttribute("onclick", "answer('answer_4')");
}


