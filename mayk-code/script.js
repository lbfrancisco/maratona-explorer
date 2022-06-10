const answerElement = document.querySelector('#answer');
const inputQuestion = document.querySelector('#input-question');
const buttonQuestion = document.querySelector('#button-question');
const answers = [
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
  if (inputQuestion.value === '') {
    alert('Por favor, digite uma pergunta.');
    return;
  }

  buttonQuestion.setAttribute('disabled', true);

  const question = '<div>' + inputQuestion.value + '</div>';

  const answersLength = answers.length;
  const randomIndex = Math.floor(Math.random() * answersLength);

  answerElement.innerHTML = question + answers[randomIndex];
  answerElement.style.opacity = 1;

  setTimeout(function () {
    answerElement.style.opacity = 0;
    inputQuestion.value = '';

    buttonQuestion.removeAttribute('disabled');
  }, 3000);
}
