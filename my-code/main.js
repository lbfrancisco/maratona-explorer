const input = document.querySelector("#input-question");
const button = document.querySelector("#btn-question");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

const answerList = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
];

function showAnswer() {  
  if(input.value === '') {
    alert("Por favor, digite uma pergunta.");
    return;
  }
  button.setAttribute('disabled', true);

  const randomAnswer = answerList[Math.floor(Math.random() * answerList.length)];
  
  question.innerHTML = input.value;
  question.style.opacity = "0.7";

  answer.innerHTML = randomAnswer;
  answer.style.opacity = "0.9";

  setTimeout(function() {
    question.style.opacity = "0";
    question.innerHTML = "";
    answer.style.opacity = "0";
    answer.innerHTML = "";

    button.removeAttribute('disabled');
  }, 3000);
}