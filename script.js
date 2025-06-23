const questions = [
  {
    question: "What comes next in the series: 2, 4, 8, 16, ...?",
    options: ["18", "20", "24", "32"],
    answer: "32"
  },
  {
    question: "Find the odd one: Apple, Banana, Cherry, Carrot",
    options: ["Apple", "Banana", "Cherry", "Carrot"],
    answer: "Carrot"
  },
  {
    question: "If CAT = 24, DOG = 26, then FOX = ?",
    options: ["42", "45", "50", "48"],
    answer: "45"
  },
  {
    question: "Which word does NOT belong: Inch, Kilogram, Centimeter, Meter?",
    options: ["Inch", "Kilogram", "Centimeter", "Meter"],
    answer: "Kilogram"
  },
  {
    question: "Which number is missing: 3, 6, 18, 72, ...?",
    options: ["144", "216", "288", "360"],
    answer: "360"
  },
  {
    question: "What is the mirror image of ‘b’?",
    options: ["d", "q", "p", "None of the above"],
    answer: "d"
  },
  {
    question: "How many 3's are there in 343353333?",
    options: ["4", "5", "6", "7"],
    answer: "7"
  },
  {
    question: "Monday is to Friday as Tuesday is to?",
    options: ["Saturday", "Sunday", "Monday", "Thursday"],
    answer: "Saturday"
  },
  {
    question: "Which is a cube number: 64, 72, 81, 100?",
    options: ["64", "72", "81", "100"],
    answer: "64"
  },
  {
    question: "What comes next: 121, 144, 169, ...?",
    options: ["196", "189", "200", "210"],
    answer: "196"
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  const q = questions[current];
  questionEl.innerText = q.question;
  answersEl.innerHTML = "";
  q.options.forEach(option => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    li.appendChild(btn);
    answersEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) score++;
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    questionEl.style.display = "none";
    answersEl.style.display = "none";
    nextBtn.style.display = "none";
    resultEl.classList.remove("hidden");
    resultEl.innerText = `🎉 You scored ${score} out of ${questions.length}`;
  }
}

nextBtn.onclick = showQuestion;
showQuestion();
