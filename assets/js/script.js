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
        "B":" Yes ",
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
    },
    {
        "question":"Sarah works at a local café. Matthew, a regular customer, often greets Sarah by trying to give her a hug which makes her uncomfortable. Recently, Rhys’s behaviour escalated when he inappropriately pinched Sarah as she walked past the table he was sitting at.What do you think about the situation? ",
        "A":"She’s being dramatic ,he’s just being friendly ",
        "B":"She needs to report to her supervisor",
        "C":"Change your shifts",
        "D":"She likes it",
        "answer":"B",
    },
    {
        "question":"Stacey and Joe went on a first date, Joe did not enjoy the date and after  Stacey started pressuring Joe to go out on another date even though has moved on. She’s also following him and popping up in random places. What would you advice Joe? ",
        "A":"Give her a second chance",
        "B":"Move FAR away",
        "C":"Report to Authorities, this could escalate",
        "D":"Just ignore her, shell go away",
        "answer":"C",
    },
    {
        "question":"Mick, a local mechanic, has recently hired a new young receptionist Abigail. Abigail’s desk is next to Micks and she notices that his screen saver is a series of degrading images of women. Mick knows this makes Abigail uncomfortable but refuses to change it. What’s your opinion of the situation? ",
        "A":"She should mind her business, it’s his phone",
        "B":"She should speak to him about it if he doesn’t listen, she needs to report him",
        "C":"Quit her job",
        "D":"She should smash his phone",
        "answer":"B",
    },
    {
        "question":"Allowing and making sexual jokes around the workplace/school etc is called ?   ",
        "A":"Quid Pro Quo Harassment ",
        "B":"An Open Environment to everyone",
        "C":"Hostile Environment harassment ",
        "D":"Both A & C ",
        "answer":"D",
    },
    {
        "question":"Your boss wants to go out on a date with you, he’s very persistent, would you consider this sexual harassment?",
        "A":"Yes it is   ",
        "B":"It’s my fault, I was too friendly,",
        "C":"I don’t know",
        "D":"No, he’s my boss",
        "answer":"A",
    },
    {
        "question":"Do you understand what is appropriate consent is in regards to sexual matters? ",
        "A":"No I don’t understand it at all ",
        "B":"I think so ",
        "C":"Maybe, im unsure",
        "D":"Yes, I understand and respect boundaries",
        "answer":"D",
    },
    {
        "question":"You should ask for consent before :",
        "A":"Having sex",
        "B":"Holding hands ",
        "C":"Kissing",
        "D":"All of the above",
        "answer":"D",
    },
    {
        "question":"Do you believe men can be victims of harassment/ assault?  ",
        "A":"No I don’t, were strong ",
        "B":"I don’t know ",
        "C":"Yes, anybody can be a victim",
        "D":"Yes, Only if they are unconscious ",
        "answer":"C",
    },
    {
        "question":"When do you think consent needs to be requested? ",
        "A":"Only right before sex ",
        "B":"Before any type of physical contact ",
        "C":"Just the first time you are physical with the person",
        "D":"When you feel like the moment is right ",
        "answer":"B",
    },
    {
        "question":"Who needs to request for consent ",
        "A":"Couples in long distance relationships",
        "B":"Married Couples",
        "C":"People hooking up for the first time",
        "D":"All of the above  ",
        "answer":"D",
    },
    {
        "question":"What signs could help you see if you have someone’s consent? ",
        "A":"Their words",
        "B":"All of above ",
        "C":"Tone of their voice ",
        "D":"Their Body language",
        "answer":"B",
    },
    {
        "question":"Which of the Following are considered sexual assault/ misconduct ? ",
        "A":"Unwelcome sexual advances or requests for sexual favours",
        "B":"Non-consensual recording of sexual activity ",
        "C":"Distributing intimate photographs of another person",
        "D":"All of the above are considered sexual assault/misconduct",
        "answer":"D",
    },
    {
        "question":"Sarah works as a traffic controller in a road construction crew. During breaks, her co-workers often make offensive sexual gestures, remarks and jokes which makes Sarah uncomfortable and distressed. What would you advice Sarah to do? ",
        "A":"Report To HR immediately  ",
        "B":"Quit job",
        "C":"Confront the men",
        "D":"Ignore them",
        "answer":"A",
    },
    {
        "question":"Leo  has been working as an analyst for three years at his company. At a recent work function his boss Lianne made inappropriate advances towards Leo ,which he rebuffed. What should he do? ",
        "A":"Be a Man, she wants you  ",
        "B":"Report her to a senior ",
        "C":"Ignore her",
        "D":"Quit job",
        "answer":"B",
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


/**
 *The Event Listener should only function while the user is on the quiz.html page.
 */
if (window.location.pathname == "/quiz.html") {
    startButton.addEventListener('click' , startGame );
  }


/**
 * Starts the game by hiding the instruction button, sorting all of the questions, and setting the necessay variables to their default values.
 */ 
function startGame () {
    startButton.classList.add('hide');
    instructionButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    homepageButton.classList.add('hide');
    getAvailableQuestions ();

    questionCounter = 0;
    acceptAnswers = true;
    score = 0;
    newQuestion();
}

/**
 * shuffle the questions in order to obtain a random question from the array
 */
function getAvailableQuestions () {
    questionsAvailable = [...questions].sort(() => Math.random() - 0.5 );
}
    

/**
 * assign the current question to the first item in the shuffled question array
 */
function newQuestion () {
    currentQuestion = questionsAvailable[0]; 
    showQuestion();
}


/**
 * chooses the response choices accessible in quiz.html for each question and displays them under the current shuffled question
 * When the user has done playing the game, the results are displayed.
 * When the user is at a new question, the question counter and progressBar are updated
 */
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


/**
 * Allows the user to select only one answer; if correct/wrong, a class with a timeout is applied.
 *  For each new question answered correctly, the user's score is increased. 
 */
function selectAnswer () {
    answers.forEach((answer) => { 
        answer.addEventListener("click" , e => {
            if(!acceptAnswers){
                return;
            }
            acceptAnswers = false ;
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

/**
 * increase the score by 100 points,when the user selects the correct answer, the score field is updated.
 */
function incrementScore (x) {
    score +=x;
    scoreField.innerText = score;
}


/**
 * When the user has done answering all of the questions, the game is reset and the results are displayed in a popup.
 */

function displayResults () {
    if (score >= 1200){
        $('#grade-seventy').modal('show');
    } else if (score <= 1100){
        $('#play-game-rules').modal('show');
    }else if (score === 100) {
        alert(" We strongly advise you seek a therapist or talk with one of our counsellors today. It's dangerous in these times to have such thinking on abuse");
    }else{
        alert ("You have a good support system which is great and mental health seems to be on check 😄. Good news");
    }
    resetState();
}

/**
 *Shows the Play Again button, which allows the user to reset the game.
 */

function resetState() {
    startButton.classList.remove('hide');
    startButton.innerText = "Play Again";
    questionContainer.classList.add('hide');
    instructionButton.classList.add('hide');
    homepageButton.classList.remove('hide');
    startButton.addEventListener('click' , resetGame);
}

/**
 * Resets the game, updates the score field, retrieves the questions, and shuffles the questions to display in new orders. 
*/

function resetGame  () { 
    score = 0;
    questionCounter = 0;
    scoreField.innerText = score;
    getAvailableQuestions ();
    newQuestion();
}