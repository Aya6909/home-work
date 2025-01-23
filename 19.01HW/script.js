const apiUrl ='https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/questions';

let questions = [];
let indexsoulari = 0;
let dogrucevap = 0;
let start = 15
let timerint;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const timerElement = document.getElementById("timer");
const retryElement = document.getElementById("retry");

async function bilgiler(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();

        questions = data.map(data => ({
            question:data.question,
            answers: data.options,
            jauap: data.answer,
        }));

        loadQuestion();

    } catch(error){
        console.error("Fetchta qate bar",error);
        questionElement.textContent = "Qate bar.";
    }
}

function loadQuestion(){
    const currentQuestion = questions[indexsoulari];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer");

        button.addEventListener("click", () => tekseru(index, button));
        answersElement.appendChild(button);
    });

    startTimer();
}

function tekseru(selectedIndex, button){
    const currentQuestion = questions[indexsoulari];

    if(selectedIndex === currentQuestion.jauap){
        button.classList.add("durus");
        dogrucevap++;
    }else{
        button.classList.add("qatee");
        const correctButton = answersElement.children[currentQuestion.jauap];
        correctButton.classList.add("durus");
    }

   Array.from(answersElement.children).forEach(btn=> btn.disabled = true);

    setTimeout(() => {
        indexsoulari++;
        if(indexsoulari < questions.length) {
            loadQuestion();
        }else{
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    questionElement.textContent =`
    Biti! Sen ${questions.length} suraqtan ${dogrucevap} bal aldin!`;

    answersElement.innerHTML = "";
    clearInterval(timerint);
    timerElement.style.display ="none";

    document.getElementById("qaytalaudiv").style.display = "block"; 
}

function startTimer() {
    clearInterval(timerint);
    start = 15;
    timerElement.textContent = start;

    timerint = setInterval(() => {
        start--;
        timerElement.textContent = start;

        if(start === 0){
            clearInterval(timerint);
            indexsoulari++;
            
            if(indexsoulari < questions.length){
                loadQuestion();
            }else{
                endQuiz();
            }
        }
    }, 1000);
}

bilgiler();

// sharshadim