const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];



let score = 0;
let currentQuestion = 0;

const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const optionEl = document.getElementById("options");


function showQuestion(){
  const {correctAnswer, answers, question} = quesJSON[currentQuestion];

  //showing the question
questionEl.textContent = questionObj.question;

//shuffle options in every render
const shuffledOption = shuffleOption(answers);

//showing all answer option
shuffledOption.forEach((opt)=> {
  const btn = document.createElement("button");
  btn.textContent = opt;
  optionEl.appendChild(btn);

  //event handling on the btn
  btn.addEventListener('click', () => {
    if(opt === correctAnswer){
      score++;
    }else{
      score = score - 0.25;
    }

    scoreEl.textContent = `Score: ${score}`;

    //after answered turning the fields empty
    questionEl.textContent = "Quiz Completed";
    optionEl.textContent = ''; 
  });
});
}







//shuffling the options after every refresh
function shuffleOption(options){
  for(let i = options.length - 1; i >= 0; i--){
    const j = Math.floor(Math.random() * i+1);
    [options[i], options[j]] = [options[j], options[i]];
  }
return options;
}