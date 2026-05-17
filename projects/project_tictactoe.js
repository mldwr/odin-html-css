// code based on 
// https://codesandbox.io/p/sandbox/connect-four-with-dom-skeleton-khnzzc

function Cell() {
  let value = '';

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue,
  };
}


function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  const resetBoard = () => {
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(Cell());
      }
    }
  };

  resetBoard();

  const getBoard = () => board;

  const getBoardDimensions = () => {
    // Return the board dimensions
    return { rows, columns };
  };

  const setToken = (row, column, player) => {
    board[row][column].addToken(player);
  };

  const printBoard = () => {
    const boardWithCellValues = board.map((row) =>
      row.map((cell) => cell.getValue())
    );
    return boardWithCellValues;
  };

  return { getBoard, setToken, printBoard, getBoardDimensions, resetBoard };
}


function GameController(  playerOneName = "Player One",  playerTwoName = "Player Two") {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      token: 'X',
    },
    {
      name: playerTwoName,
      token: 'O',
    },
  ];

  let activePlayer;

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const resetGame = () => {
    board.resetBoard();
    activePlayer = players[0];
  };

  resetGame();

  const showWinner = (winner) => {
    // show winner modal
    const winnerModal = document.querySelector(".winner-modal");
    winnerModal.showModal();
    // show winner name
    const winnerName = document.querySelector(".winner-name");
    winnerName.textContent = winner.name + " wins!";
    winnerName.style.color = winner.token === 'X' ? "red" : "blue";
  };

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  const checkWinner = () => {
    const player = getActivePlayer().token;
    const {rows, columns} = board.getBoardDimensions();
    const currentBoard = board.getBoard();
    let winner = null;
    // Check rows
    for (let i = 0; i < rows; i++) {
      if (currentBoard[i].every((cell) => cell.getValue() === player)) {
        winner = activePlayer;
        break;
      }
    }
    // Check columns
    for (let i = 0; i < columns; i++) {
      if (currentBoard.every((row) => row[i].getValue() === player)) {
        winner = activePlayer;
        break;
      }
    }
    // Check diagonals
    if (currentBoard.every((row, index) => row[index].getValue() === player)) {
      winner = activePlayer;
    }
    if (currentBoard.every((row, index) => row[2 - index].getValue() === player)) {
      winner = activePlayer;
    }
    return winner;
  }

  const playRound = (row, column) => {
    console.log(
      `Dropping ${getActivePlayer().name}'s token into column ${column}...`
    );
    board.setToken(row, column, getActivePlayer().token);

    // check for a winner
    const winner = checkWinner();
    if (winner) {
      console.log(`${winner.name} wins!`);
      // show winner on screen
      // show winner on screen
      showWinner(winner);
      // restart game
      printNewRound();
      return;
    }

    switchPlayerTurn();
    printNewRound();
  };

  printNewRound();

  return {
    playRound,
    getActivePlayer,
    getBoard: board.getBoard,
    showWinner,
    printNewRound,
    resetGame,
  };
}

function ScreenController() {
  const game = GameController();
  const playerTurnDiv = document.querySelector(".turn");
  const boardDiv = document.querySelector(".board");
  const winnerModal = document.querySelector(".winner-modal");
  const restartBtn = document.querySelector("#restart-btn");

  const updateScreen = () => {
    // clear the board
    boardDiv.textContent = "";

    // get the newest version of the board and player turn
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();

    // Display player's turn
    playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;

    // Render board squares
    board.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        // Anything clickable should be a button!!
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        // Create a data attribute to identify the column
        // This makes it easier to pass into our `playRound` function
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = columnIndex;
        cellButton.textContent = cell.getValue();
        boardDiv.appendChild(cellButton);
      });
    });
  };

  // Add event listener for the board
  function clickHandlerBoard(e) {
    const selectedRow = e.target.dataset.row;
    const selectedColumn = e.target.dataset.column;

    // Make sure I've clicked a cell and not the gaps in between
    if (selectedRow === undefined || selectedColumn === undefined) return;

    game.playRound(parseInt(selectedRow), parseInt(selectedColumn));
    updateScreen();
  }
  boardDiv.addEventListener("click", clickHandlerBoard);

  restartBtn.addEventListener("click", () => {
    game.resetGame();
    winnerModal.close();
    updateScreen();
  });

  // Initial render
  updateScreen();

  // We don't need to return anything from this module because everything is encapsulated inside this screen controller.
}

ScreenController();
