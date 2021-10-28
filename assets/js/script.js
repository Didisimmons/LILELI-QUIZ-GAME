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
        "A":"Sometimes ",
        "B":" Depends on the abuser",
        "C":"No",
        "D":"Yes",
        "answer":"D",
    }

]
const startButton = document.getElementById("btn-start");
const restartButton = document.getElementById("btn-restart")
const questionContainer = document.getElementById("question-area-container")
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

startButton.addEventListener('click' , startGame() )