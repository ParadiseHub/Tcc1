const progressBar = document.querySelector(".progress-bar"),
    progressText = document.querySelector(".progress-text");

const progress = (value) => {
        const percentage = (value / time) * 100;
        progressBar.style.width = `${percentage}%`;
        progressText.innerHTML = `${value}`;
 };

let question = [],
        time = 30,
        score = 0,
        currentQuestion,
        timer;

const startBtn = document.querySelector(".start"),
        numQuestions = document.querySelector("#num-questions"),
        category = document.querySelector("#category"),
         difficulty = document.querySelector("#difficulty"),
         timePerQuestion = document.querySelector("#time"),
         quiz = document.querySelector("#time"),
         startscreen = document.querySelector("#category");

const startQuiz = () => {
    const num = numQuestions.value;
    cat = category.value;
    diff = difficulty.value;
    const url = `https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple`;
     fetch(url)
        .then((res) => res.json())
        .then((data) => {
            question = data.results;
            startscreen.classList.add("hide");
            quiz.classList.remove("hide");
            currentQuestion = 1;
            showQuestion(question[0])
        });
}

startBtn.addEventListener("click", startQuiz);

    