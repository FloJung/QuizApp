
function restartGameHTML() {
    return `<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" id="progressBar" style="width: 0%">25%</div>
  </div>

  <h5 class="card-title" id="questiontext">Card title</h5>

  <div class="card mb-2 quizAnswerCard" id="answer1" onclick="answer('answer_1')">
    <div class="card-body">
        <span class="answerLetters">A</span><span id="answer_1">This is some text within a card body.</span>
    </div>
  </div>

  <div class="card mb-2 quizAnswerCard" id="answer2" onclick="answer('answer_2')">
    <div class="card-body">
        <span class="answerLetters">B</span><span id="answer_2">This is some text within a card body.</span>
    </div>
  </div>

  <div class="card mb-2 quizAnswerCard" id="answer3" onclick="answer('answer_3')">
    <div class="card-body">
        <span class="answerLetters">C</span><span id="answer_3">This is some text within a card body.</span>
    </div>
  </div>

  <div class="card mb-2 quizAnswerCard" id="answer4" onclick="answer('answer_4')">
    <div class="card-body">
     <span class="answerLetters">D</span><span id="answer_4">This is some text within a card body.</span>
    </div>
  </div>`;
}

function EndScreenHTML() {
    return `
    <div class="resultScreen">
            <img src="./img/brain result.png" class="brainResult mb-4">
            <h1 class="mb-4">Complete HTML Quiz</h1>
            <span class=" fontScor">YOUR SCOR</span><div><span class="mb-2 scor" id="amountOfRightQuestions">10</span><span class="mb-2 scor">/</span>
            <span id="amountOfQuestions" class="mb-2 scor">10</span></div>
            <button class="btn btn-primary mb-5" onclick="restartGame()">REPLAY</button>
    </div>
    `;
}