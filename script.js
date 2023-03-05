const quizQuestions = [{
    question: "Which is the biggest flying object among this?", 
    answers: [
        {text: "Airbus A380", correct: false},
        {text: "Hindenburg", correct: true},
        {text: "Boeing 747", correct: false},
        {text: "Flying Ship", correct: false},
    ],
},
{
    question: "The worst Air accident of India happend near which Indain city?", 
    answers: [
        {text: "Delhi", correct: true},
        {text: "Calicut", correct: false},
        {text: "Manglore", correct: false},
        {text: "Mumbai", correct: false},
    ],
},
{
    question: "Who is known as the father of Indian aviation?", 
    answers: [
        {text: "JRD Tata", correct: true},
        {text: "Ratan Tata", correct: false},
        {text: "Narendra Modi", correct: false},
        {text: "APJ Abdul Kalam", correct: false},
    ],
},
{
    question: "In which year Air India got it's first B747 Aircrafts?", 
    answers: [
        {text: "1982", correct: false},
        {text: "1969", correct: false},
        {text: "1971", correct: true},
        {text: "1990", correct: false},
    ],
},
{
    question: "Who partners with Air India and has 25% share of it?", 
    answers: [
        {text: "Emirates", correct: false},
        {text: "Luftahansa", correct: false},
        {text: "American Airlines", correct: false},
        {text: "Singapore Airlines", correct: true},
    ],
},
];


let questionIndex = 0;
let score = 0;


const questionBlock = document.getElementById("real_question");
const questionNumbers = document.getElementById("brief_answer");
const answerOne = document.getElementById("ans_btn1");
const answerTwo = document.getElementById("ans_btn2");
const answerThree = document.getElementById("ans_btn3");
const answerFour = document.getElementById("ans_btn4");
const nextButton = document.getElementById("nxt_btn");
const prvButton = document.getElementById("prv_btn");
const finishButton = document.getElementById("finish");
const nextButton1 = document.getElementById("nxt_btnM");
const prvButton1 = document.getElementById("prv_btnM");
const finishButton1 = document.getElementById("finishM");
const startButton = document.getElementById("btnstrt");
const startSection = document.getElementById("start");
const answerButtons = document.querySelectorAll(".button")

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    questionIndex++;
    setNextQuestion();
});
nextButton1.addEventListener("click", () => {
    questionIndex++;
    setNextQuestion();
});


function startQuiz(){
    startSection.style.display = "none";
    document.getElementById("container").style.display = "flex";
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    if(questionIndex<quizQuestions.length){
        showQuestion(quizQuestions[questionIndex]);
    }
    else{
        endQuiz();
    }
}

function showQuestion(question){
    questionBlock.innerText = question.question;
    questionNumbers.innerText = `Question ${questionIndex+1} of ${quizQuestions.length}`
    question.answers.forEach((answer, index) => {
        answerButtons[index].innerText = answer.text;
        answerButtons[index].addEventListener("click", () => {
            if(answer.correct){
                answerButtons[index].style.background = "green";
                score++;
            }
            else{
                answerButtons[index].style.background = "red";
            }
            answerButtons.forEach((button) => {
                button.disabled = true;
            });
            console.log(score);
        });
    });
}

finishButton.addEventListener("click", endQuiz);

function resetState(){
    answerButtons.forEach((button) => {
        button.disabled = false;
        button.style.background = "#d0a77299";
    });
}

function endQuiz(){
    questionBlock.innerText = `Your score is ${Math.floor(score/2)} out of ${quizQuestions.length}.`;
    nextButton.disabled = true;
    nextButton1.disabled = true;
    finishButton.innerText = "Restart";
    finishButton.addEventListener("click", restartQuiz);
    finishButton1.innerText = "Restart";
    finishButton1.addEventListener("click", restartQuiz);
}

function restartQuiz(){
    questionIndex = 0;
    score = 0;
    nextButton.disabled = false;
    nextButton1.disabled = false;
    finishButton.removeEventListener("click", restartQuiz);
    setNextQuestion();
}



