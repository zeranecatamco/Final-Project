let timerInterval;
    let firstCard = null;
    let lockBoard = false;
    let matches = 0;

    const levels = {
      easy: ["A", "B", "C", "D", "E"],
      medium: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      hard: [
        "USA", "Japan", "Canada", "India",
        "Germany", "France", "Italy", "Korea", "China", "Russia", "Hongkong", "London"
      ]
    };

    const timeLimits = {
      easy: 300,
      medium: 120,
      hard: 100
    };

    function startGame() {
      const selectedLevel = document.getElementById("level").value;
      const contents = levels[selectedLevel];
      const timeLimit = timeLimits[selectedLevel];
      const board = document.getElementById("gameBoard");
      const timerDisplay = document.getElementById("timer");

      board.innerHTML = "";
      firstCard = null;
      lockBoard = false;
      matches = 0;

      let cards = [...contents, ...contents].sort(() => 0.5 - Math.random());

      cards.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.value = item;
        card.onclick = () => handleCardClick(card);
        board.appendChild(card);
      });

      clearInterval(timerInterval);
      let timeLeft = timeLimit;
      timerDisplay.textContent = timeLeft;

      timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          alert("Time is up!");
          lockBoard = true;
        }
      }, 1000);
    }

    function handleCardClick(card) {
      if (lockBoard || card.classList.contains('matched') || card.textContent) return;

      card.textContent = card.dataset.value;

      if (!firstCard) {
        firstCard = card;
      } else {
        lockBoard = true;
        if (firstCard.dataset.value === card.dataset.value) {
          firstCard.classList.add('matched');
          card.classList.add('matched');
          matches++;

          const selectedLevel = document.getElementById("level").value;
          const winCondition = selectedLevel === "easy" ? 5 : (selectedLevel === "medium" ? 10 : 15);

          if (matches === winCondition) {
            clearInterval(timerInterval);
            alert('Congratulations! You win!');
          }
          resetTurn();
        } else {
          setTimeout(() => {
            firstCard.textContent = '';
            card.textContent = '';
            resetTurn();
          }, 800);
        }
      }
    }

    function resetTurn() {
      firstCard = null;
      lockBoard = false;
    }
