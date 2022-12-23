const  quizDB = [
    {
        question: "গোল ‌’তা’ কে কখন গোল ‘হা’ পড়তে হয় ?",
        a: "গোল ‘তা’ এ যের, যাবার ও পেশ থাকলে",
        b: "গোল ‘তা’ এ দম ফেললে",
        c: "গোল ‘তা’ এ যাবার থাকলে",
        d: "গোল ‘তা’ এ যের থাকলে",
        ans: "ans2"
    },
    {
        question: "আলিফকে কখন হামযা বলা হয়?",
        a: "আলিফে যখন যাবার থাকে",
        b: "আলিফে যখন যের ও পেশ থাকে",
        c: "আলিফে যখন যাবার, যের, পেশ, সাকিন ও তাশদীদ থাকে",
        d: "আলিফে যখন তাশদীদ থাকে",
        ans: "ans3"
    },
    {
        question: "ছোট ‘হা’ ه ও বড়  ح (হা) উচ্চারণের পার্থক্য কি?",
        a: "বড়  ح (হা) উচ্চারণে শীতের সময় মুখ থেকে ইচ্ছাকৃত ভাপ বের করার মতো শব্দ হবে, কিন্তু ছোট ‘হা’ এ তা হবে না",
        b: "ছোট ‘হা’ ه এ ভাপ বের করার মতো শব্দ হবে",
        c: "ছোট হা উচ্চারণে বেশি বাতাস বের হবে বড় হা এর চেয়ে",
        d: "বড় হা উচ্চারণে বেশি বাতাস বের হয়",
        ans: "ans1"
    },
    {
        question: "আলিফ ﺍ এবং ﻉ আঈন উচ্চারণের পার্থক্য কিভাবে করতে হবে?",
        a: "আঈন ﻉ মুখ সম্পূর্ণ হা করে আর ﺍ আলিফ গলা একটু চিপে",
        b: "আলিফ ﺍ গলার মধ্যখান থেকে মুখ সম্পূর্ণ হা করে আর ﻉ আঈন মুখ সম্পূর্ণ হা না করে গলা একটু চিপে গড়গড়ার মত করে",
        c: "আলিফ গলার শেষ ভাগ থেকে আর আইন গলার শুরু ভাগ থেকে",
        d: "আইন জিহ্বার শুরুর থেকে , আলিফ জিহ্বার শেষ থেকে",
        ans: "ans2"
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