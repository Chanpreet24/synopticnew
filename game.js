const question = document.querySelector('#question');
const choices  = Array.from (document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        question: "what is 2 + 2",
        choice1: '1',
        choice2: '4',
        choice3: '7',
        choice4: '10',
        answer: 2,
    },
    {
        question: "who won europa league in 2021",
        choice1: 'chels',
        choice2: 'utd',
        choice3: 'Spurs',
        choice4: 'villareal',
        answer: 4,
    },
    {
        question: "Who won the PL",
        choice1: 'City',
        choice2: 'Utd',
        choice3: 'Arsenal',
        choice4: 'Spurs',
        answer: 1,
    },
    {
        question: "what year is it",
        choice1: '2021',
        choice2: '2222',
        choice3: '2023',
        choice4: '2022',
        answer: 1,
    },
    {
        question: "what month is it",
        choice1: 'june',
        choice2: 'july',
        choice3: 'may',
        choice4: 'sept',
        answer: 4,
    },
    {
        question: "what month is xmas",
        choice1: 'june',
        choice2: 'july',
        choice3: 'may',
        choice4: 'Dec',
        answer: 4,
    },

    {
        question: "how old is Albert",
        choice1: '10',
        choice2: '20',
        choice3: '30',
        choice4: '30',
        answer: 2,
    },
]

//In capitals as not planning on changing anything therefore the two consts below are in CAPS

const SCORE_POINTS = 100
const MAX_QUESTIONS = 7


function startGame () {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    newquestions()
}

 function newquestions () {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)

    //return window.location.assign('/end.html')
    return document.querySelector('#log-out-button').addEventListener('click', () => {
        window.location.href = './end.html';
    });
}

questionCounter++
progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`


var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choices => {
    choices.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false

        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            newquestions()

        }, 1000)
    })
})
    
 function incrementScore (num) {
    score +=num
    scoreText.innerText = score
}

startGame()


document.querySelector('#log-out-button').addEventListener('click', () => {
    window.location.href = './loginPage.html';
});

document.querySelector('#Edit-playerButton').addEventListener('click', () => {
    window.location.href = './editPlayer.html';
});

document.querySelector('#Edit-quizButton').addEventListener('click', () => {
    window.location.href = './editQuiz.html';
});

