let questions = [
    {
        "question":"In order for it to be considered sexual abuse, the victim has to be of the opposite sex of the abuser?",
        "A":"No",
        "B":"Not Sure",
        "C":"Maybe,In most cases",
        "D":"Yes",
        "answer":"A",
    },
    {
        "question":"An employee witnesses another employee being physically assaulted. Can the witness be considered a victim in this case. ",
        "A":"Not sure ",
        "B":" No",
        "C":"Maybe Its tricky",
        "D":"Yes",
        "answer":"D",
    },
    {
        "question":"Sexual abuse is not limited to physical contact. It can occur any time that an individual is uncomfortable with another person's approaches, comments or discussions. ",
        "A":" No",
        "B":" hell Yeah ",
        "C":" Not sure",
        "D":"That is quite extreme ",
        "answer":"B",
    },
    {
        "question":"Abuse complaints are unjustified mostly ?  ",
        "A":"Sometimes ",
        "B":" Depends on the abuser",
        "C":"No",
        "D":"Yes",
        "answer":"C",
    },
    {
        "question":"In situations were an employee is sexually harassed by a coworker outside of work site, for example social events /gatherings  would  that still be regarded as work abuse.",
        "A":"Not at all",
        "B":" Maybe",
        "C":"Its a tricky one ",
        "D":"Yes",
        "answer":"D",
    },
    {
        "question":"Terms of endearment with co-workers, i.e. “darling,” “honey” can be seen as  verbal abuse and charges can be brought up against the employee.  ",
        "A":"Yes ",
        "B":" Depends on the abuser",
        "C":"No",
        "D":"Sometimes",
        "answer":"A",
    }

];
const startButton = document.getElementById("btn-start");
const instructionButton = document.getElementById("inst-btn");
const homepageButton = document.getElementById("refer");
const questionContainer = document.getElementById("question-area-container");
const question = document.getElementById("main-questions");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionNumber = document.getElementById("question-prefix");
const scoreField = document.getElementById("score");
const progressBar = document.getElementById("progress-icon");

let score;
let questionCounter;
const HIGHEST_QUESTIONS = questions.length;
const POINTS = 100;

let acceptAnswers;

startButton.addEventListener('click' , startGame );


function startGame () {
    startButton.classList.add('hide');
    instructionButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    homepageButton.classList.add('hide');

    questionsAvailable = [...questions].sort(() => Math.random() - 0.5 );
    questionCounter = 0;
    acceptAnswers = true;
    score = 0;
    newQuestion();
}

function newQuestion () {
    currentQuestion = questionsAvailable[0]; 
    showQuestion();
}

function showQuestion () {
    if (questionsAvailable.length === 0) {
        displayResults();
        return ;
    }
    questionCounter++;
    questionNumber.innerText = `Question ${questionCounter} of ${HIGHEST_QUESTIONS}`;
    progressBar.style.width = `${(questionCounter/HIGHEST_QUESTIONS) * 100}%`;
    
    question.innerText = currentQuestion.question;
    answers.forEach((answer) => { 
        let options = answer.dataset.answer;
        answer.innerText = currentQuestion[options];
    });
    acceptAnswers = true ;
    selectAnswer();
    questionsAvailable.shift();
}


function selectAnswer () {
    answers.forEach((answer) => { 
        answer.addEventListener("click" , e => {
            if(!acceptAnswers){
                return;
            }
            acceptAnswers = false;
    
            const selectedAnswer = e.target;
            const pickedAnswer = selectedAnswer.dataset.answer;
            console.log( pickedAnswer);
    
            if (pickedAnswer === currentQuestion.answer){
                applyClass = "right-answer";
                selectedAnswer.parentElement.classList.add(applyClass);
                incrementScore(POINTS);
        
            } else {
                applyClass = "wrong-answer";   
                selectedAnswer.parentElement.classList.add(applyClass);
            }
    
    
            setTimeout(() => {
                selectedAnswer.parentElement.classList.remove(applyClass);
                newQuestion();
                acceptAnswers = true;
            },1000);
    
        });
    });
    
}

function incrementScore (x) {
    score +=x;
    scoreField.innerText = score;
}


function displayResults () {
    if (score >= 600){
        $('#grade-seventy').modal('show');
    } else if (score === 400){
        $('#grade-seventy').modal('show');
    }else if (score === 100) {
        alert(" We strongly advise you seek a therapist or talk with one of our counsellors today. It's dangerous in these times to have such thinking on abuse");
    }else{
        alert ("You have a good support system which is great and mental health seems to be on check 😄. Good news");
    }
   resetGame();
}

function resetGame () {
    startButton.classList.remove('hide');
    startButton.innerText = "Play Again";
    questionContainer.classList.add('hide');
    instructionButton.classList.add('hide');
    homepageButton.classList.remove('hide');
    startButton.addEventListener('click' , resetState );
}

function resetState () { 
    startGame ();
}