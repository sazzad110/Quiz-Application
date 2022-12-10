const  quizDB = [
    {
        question: "Q1: What is the result of 2+2 ?",
        a: "4",
        b: "2",
        c: "1",
        d: "5",
        ans: "ans1"
    },
    {
        question: "Q2: What is the result of 5*5 ?",
        a: "10",
        b: "5",
        c: "25",
        d: "1",
        ans: "ans3"
    },
    {
        question: "Q1: What is the result of 4-1 ?",
        a: "3",
        b: "1",
        c: "2",
        d: "5",
        ans: "ans1"
    },
    {
        question: "Q1: What is the result of 10/2 ?",
        a: "1",
        b: "2",
        c: "3",
        d: "5",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion =  () => {

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem)=> {
        if(curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });

    return answer;

};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if(checkAnswer == quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();

    }else{

        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()"> Test Again </button>
        `;

        showScore.classList.remove('scoreArea');

    }

});