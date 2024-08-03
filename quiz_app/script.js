const question =[
    {
        question:'which is largest animal in the world',
        answer:[
            {text:"cat",correct:false},
            {text:"shark",correct:true},
            {text:"elefant",correct:false},
            {text:"tiger",correct:false}
        ]
    
    },
    {
        question:'What is the capital of France?',
        answer:[
            {text:"delhi",correct:false},
            {text:"london",correct:false},
            {text:"paris",correct:true},
            {text:"san fransisco",correct:false}
        ]
    
    },
    {
        question:'What is the largest ocean on Earth?',
        answer:[
            {text:"indian ocean",correct:false},
            {text:"prscific ocean",correct:true},
            {text:"atlantic ocean",correct:false},
            {text:"arctic ocean",correct:false}
        ]
     
    },
    {
        question:'Which planet is known as the Red Planet?',
        answer:[
            {text:"earth",correct:false},
            {text:"jupitar",correct:false},
            {text:"saturn",correct:false},
            {text:"mars",correct: true}
        ]
    
    },
]
const questionElement = document.getElementById('quetion')
const answerButton = document.getElementById('answer-button')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
  
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questitonNO= currentQuestionIndex +1;
    questionElement.innerHTML=questitonNO + '.' + currentQuestion.question;


    currentQuestion.answer.forEach((answer) =>{
        const button = document.createElement('button')
        button.innerHTML= answer.text;
        answerButton.appendChild(button)
    });
}

startQuiz()