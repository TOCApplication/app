const quizData = [
  
  {
    round: 1,
    info: "Welcome to Round 1: This round contains 5 questions on basic  concepts.",
    questions: [
        { question: "What type of language can be recognised by a finite automaton?", options: [" Regular language ", "Context free language ", "context sensitive language ", "Recursive language "], answer: 0 },
        { question: "Which closure properties associated with regular languages?", options: ["Union ",  "intersection ", "concatenation ","kleene closure"], answer: 3 },
        { question: " What is the basic building block of regular expression? ", options: ["Symbol ", "concatenation ", "kleene closure ", "Meta character"], answer: 0 },
        { question: "What type of automaton recognises regular languages? ", options: ["Finite automaton ", "pushdown automaton ", "turing machine ", "linear bounded automaton"], answer: 0 },
        { question: "Which algorithm converts a finite automaton to a regular expression by eliminating States?", options: ["Thomson's construction ", "state elimination method ", "Arden's lemma", "Recursive descent parsing"], answer: 1 }
    ]
} /*,
{
    round: 2,
    info: "Welcome to Round 2: This round contains questions on various ",
    questions: [
        { question: "Which theorem states that NFAs can recognize exactly the same languages as DFAs?", options: ["Church - Turing thesis", "Pumping Lemma", "Equivalence of NFA and DFA", "Kleene's theorem"], answer: 2 },
        { question: "Which type of automaton allows multiple transitions for a symbol from a state?", options: ["Deterministic Finite Automata (DFA)", "Non-deterministic Finite Automata(NFA)", "Finite Automata with Epsilon Transitions", "Pushdown Automata(PDA)"], answer: 1 },
        { question: "What is the primary objective of formal proofs in mathematics and computer science?", options: ["To provide a rigorous method for proving properties of automata and languages", "To develop efficient algorithms", "To model real-world systems", "To optimize network protocols"], answer: 0 },
        { question: "What is the primary motivation behind the study of Automata Theory?", options: ["To optimize computer algorithms", "To understand the limitations of computing machines", "To develop efficient data structures", "To analyze network protocols"], answer: 2 },
        { question: "Which topic deals with proving statements about sets using formal methods?", options: ["A proof about sets", "Proof by Contradiction", "Inductive Proof", "Minimization of DFA"], answer: 0 }

  ]
}*/
];



  




let currentRound = 0;
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = new Set();

document.getElementById('participant-form').addEventListener('submit', function(event) {
  event.preventDefault();
 
  showRules();
});

function showRules() {
  document.getElementById('intro-container').classList.add('hidden');
  const rulesContainer = document.getElementById('rules-container');
  rulesContainer.classList.remove('hidden');
  document.getElementById('rules-text').textContent = quizData[currentRound].info;
}

function startRound() {
  document.getElementById('rules-container').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  loadQuiz();
}

function loadQuiz() {
  loadQuestion();
}

function loadQuestion() {
  const questionContainer = document.getElementById('question-container');
  const questionData = quizData[currentRound].questions[currentQuestionIndex];

  const optionsHtml = questionData.options.map((option, index) =>
      `<li onclick="checkAnswer(${index}, this)">${option}</li>`).join('');

  questionContainer.innerHTML = `
      <p>${questionData.question}</p>
      <ul>${optionsHtml}</ul>
  `;
}

function checkAnswer(selectedIndex, optionElem) {
  const questionData = quizData[currentRound].questions[currentQuestionIndex];
  const correctAnswerIndex = questionData.answer;

  if (!answeredQuestions.has(currentQuestionIndex)) {
      answeredQuestions.add(currentQuestionIndex);
  }

  const options = optionElem.parentNode.childNodes;
  options.forEach((option, index) => {
      if (index === correctAnswerIndex) {
          option.classList.add('correct');
          if (index === selectedIndex) score++;
      } else if (index === selectedIndex) {
          option.classList.add('wrong');
      }
  });

  setTimeout(() => {
      nextQuestion();
  }, 1000);
}

function nextQuestion() {
  if (currentQuestionIndex < quizData[currentRound].questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
  } else {
      moveToNextRound();
  }
}

function moveToNextRound() {
  if (currentRound < quizData.length - 1) {
      currentRound++;
      currentQuestionIndex = 0;
      answeredQuestions = new Set();
      document.getElementById('quiz-container').classList.add('hidden');
      showRules();
  } else {
      showFinalScore();
  }
}

function showFinalScore() {
  const quizContainer = document.getElementById('quiz-container');
  const scoreContainer = document.getElementById('score-container');
  const finalScoreElem = document.getElementById('final-score');
  quizContainer.classList.add('hidden');
  finalScoreElem.textContent = `You scored ${score} out of ${quizData.reduce((total, round) => total + round.questions.length, 0)}.`;
  scoreContainer.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuiz();
});


// Function to navigate to a unit page
function navigateToUnit(page, unitName) {
  window.location.href = `${page}?unitName=${encodeURIComponent(unitName)}`;
}