class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.size = size;
    this.numberOfPaths = 0;
  }

  createPaths(row, col) {
    this.board.togglePiece(row, col);
    if (row === this.size - 1 && col === this.size - 1) {
      this.numberOfPaths++;
      this.board.togglePiece(row, col);
      return;
    }
    if (row - 1 >= 0 && !this.board.hasBeenVisited(row - 1, col)) {
      this.createPaths(row - 1, col);
    }
    if (row + 1 < this.size && !this.board.hasBeenVisited(row + 1, col)) {
      this.createPaths(row + 1, col);
    }
    if (col - 1 >= 0 && !this.board.hasBeenVisited(row, col - 1)) {
      this.createPaths(row, col - 1);
    }
    if (col + 1 < this.size && !this.board.hasBeenVisited(row, col + 1)) {
      this.createPaths(row, col + 1);
    }
    this.board.togglePiece(row, col);
  }

  solve() {
    this.createPaths(0, 0);
    return this.numberOfPaths;
  }
}

module.exports = { RobotPaths };
