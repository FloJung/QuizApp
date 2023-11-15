
// git add .
// git commit -m "first commit"
// git push

let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right-answer": 3
    },
    {
        "question": "Was bedeutet die Abkürzung 'HTML'?",
        "answer_1": "HyperText Markup Language",
        "answer_2": "HighTech Modern Language",
        "answer_3": "Hyperlink and Text Management Language",
        "answer_4": "Home Tool Markup Language",
        "right-answer": 1
    },
    {
        "question": "Welches HTML-Element wird verwendet, um einen Absatz zu erstellen?",
        "answer_1": "<pd>",
        "answer_2": ".<paragraph>",
        "answer_3": ".<p>",
        "answer_4": "<par>",
        "right-answer": 3
    },
    {
        "question": "Welches HTML-Tag wird verwendet, um eine Liste zu erstellen?",
        "answer_1": ".<ul>",
        "answer_2": ".<ol>",
        "answer_3": ".<li>",
        "answer_4": ".<list>",
        "right-answer": 1
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
        "question": "Welches HTML-Element wird verwendet, um eine Tabelle zu erstellen?",
        "answer_1": ".<table>",
        "answer_2": ".<t>",
        "answer_3": ".<tab>",
        "answer_4": ".<tbl>",
        "right-answer": 1
    },
    {
        "question": "Was ist die Bedeutung des HTML-Attributs 'src'?",
        "answer_1": "Source",
        "answer_2": "Style Reference",
        "answer_3": "Script",
        "answer_4": "Subscript",
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
        updateProgressBar();
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


