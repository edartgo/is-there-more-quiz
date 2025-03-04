
  
  // Initialize variables
  let score = 0;
// let- ceates a variable (score) that is given a value (0)
  let currentQuestionIndex = 0;
  
  // DOM elements
  const startButton = document.getElementById('start-btn');
  const gameScreen = document.getElementById('game-screen');
  const titleScreen = document.getElementById('title-screen');
  const questionText = document.getElementById('question-text');
  const answerButtons = document.getElementById('answer-buttons');
  const scoreDisplay = document.getElementById('score');
  const endScreen = document.getElementById('end-screen');
  const finalScore = document.getElementById('final-score');
  const encouragementMessage = document.getElementById('encouragement-message');
  const restartButton = document.getElementById('restart-btn');

  function startGame() {
    // Hide the title screen and show the game screen
    titleScreen.style.display = 'none';
    gameScreen.style.display = 'block';}
    
  // Start the game
  startButton.addEventListener('click', startGame);
  
  
    
    // Initialize score and question index
    score = 0;
    currentQuestionIndex = 0;
    
    // Load the first question
    loadQuestion();
  
  
  // Load the current question
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Display question text
    questionText.textContent = currentQuestion.question;
  
    // Clear previous answer buttons
    answerButtons.innerHTML = '';
  
    // Create answer buttons
    currentQuestion.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.classList.add('answer');
      button.addEventListener('click', () => handleAnswer(choice));
      answerButtons.appendChild(button);
    });
  }
  
  // Handle answer selection
  function handleAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Correct answer
      score++;
      alert("Correct! " + currentQuestion.explanation);
    } else {
      // Incorrect answer
      alert("Incorrect! The correct answer was: " + currentQuestion.correctAnswer + ". " + currentQuestion.explanation);
    }
  
    // Update score display
    scoreDisplay.textContent = score;
  
    // Move to the next question or end the game
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endGame();
    }
  }
  
  // End the game
  function endGame() {
    // Hide the game screen and show the end screen
    gameScreen.style.display = 'none';
    endScreen.style.display = 'block';
    
    // Display final score
    finalScore.textContent = score;
  
    // Display encouragement message based on score
    if (score === questions.length) {
      encouragementMessage.textContent = "Excellent! You answered all the questions correctly!";
    } else if (score >= questions.length / 2) {
      encouragementMessage.textContent = "Great job! You got more than half right!";
    } else {
      encouragementMessage.textContent = "Good effort! Keep studying the Bible!";
    }
  }
  
  // Restart the game
  restartButton.addEventListener('click', startGame);
  