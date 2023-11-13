
// git init
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


function render() {
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let selectedQuestionNumber = selection.slice(-1);
    let rightAnswer = questions[currentQuestion]['right-answer'];
    let idOfRightAnswer = `answer_${rightAnswer}`;

    if(selectedQuestionNumber == rightAnswer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }else {
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    
    resetAnswerButton();
    showQuestion();
}

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}