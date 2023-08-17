const questions = [
  {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctIndex: 0
  },
  {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctIndex: 1
  }
  // Add more questions here
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "option";
      radio.value = index;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(option));
      optionsElement.appendChild(label);
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector("input[name='option']:checked");
  if (!selectedOption) return;

  const selectedAnswer = parseInt(selectedOption.value);
  const correctAnswer = questions[currentQuestionIndex].correctIndex;

  if (selectedAnswer === correctAnswer) {
      alert("Correct!");
  } else {
      alert("Wrong. The correct answer is: " + questions[currentQuestionIndex].options[correctAnswer]);
  }

  nextButton.disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      loadQuestion();
      nextButton.disabled = true;
  } else {
      alert("Quiz completed!");
      nextButton.disabled = true;
  }
}

loadQuestion();
nextButton.addEventListener("click", nextQuestion);
optionsElement.addEventListener("change", checkAnswer);
