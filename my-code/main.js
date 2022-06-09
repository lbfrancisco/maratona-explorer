const input = document.querySelector("#input-question");
const button = document.querySelector("#btn-question");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

const answerList = ["Sim!", "Não!", "Talvez...", "Quem sabe?"];

function showAnswer() {  
  let randomAnswer = answerList[Math.floor(Math.random() * answerList.length)];
  
  question.innerHTML = input.value;
  question.style.opacity = "0.7";
  question.style.transition = "all .4s";

  answer.innerHTML = randomAnswer;
  answer.style.opacity = "0.9";
  answer.style.transition = "all .4s";

  hideAnswer();
}

function hideAnswer() {
  setTimeout(function() {
    question.style.opacity = "0";
    question.style.transition = "all .4s";
    question.innerHTML = "";
    answer.style.opacity = "0";
    answer.style.transition = "all .4s";
    answer.innerHTML = "";
  }, 3000);
}

button.addEventListener("click", showAnswer);