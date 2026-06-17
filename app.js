console.log("app.js berhasil dimuat");

const nextBtn =
document.getElementById("nextBtn");

const openingScreen =
document.getElementById("opening-screen");

const quizScreen =
document.getElementById("quiz-screen");

nextBtn.addEventListener("click", () => {

    openingScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    }); 

let score = 0;

const scoreBox =
document.getElementById("score-box");

const repeatBtn =
document.getElementById("repeatBtn");

const quizNextBtn =
document.getElementById("quizNextBtn");

const answerButtons =
document.querySelectorAll(".answer-btn");

let answered = false;

answerButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(answered) return;

        answered = true;

        const isCorrect =
        button.dataset.correct === "true";

        if(isCorrect){

            score += 500;

            scoreBox.textContent =
            score;

        }

        answerButtons.forEach(btn => {

            const bg =
            btn.querySelector(".answer-bg");

            const correct =
            btn.dataset.correct === "true";

            if(btn === button){

                if(correct){

                    bg.src =
                    "assets/answer-green.png";

                }else{

                    bg.src =
                    "assets/answer-red.png";

                }

            }

            else if(correct){

                bg.src =
                "assets/answer-green.png";

            }

        });

        repeatBtn.classList.add("hidden");

        quizNextBtn.classList.remove("hidden");

    });

});