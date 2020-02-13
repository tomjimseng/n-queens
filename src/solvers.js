/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function (n) {
  var solution = new Board({ 'n': n });

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution.togglePiece(i, j);

      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(i, j);
      }
    }
  }

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n, board = new Board({ 'n': n }), row = 0, rooks = n) {
  var solutionCount = 0;

  if (rooks > 0) {
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      rooks--;
      row++;
      if (!board.hasAnyRooksConflicts()) {
        solutionCount += countNQueensSolutions(n, board, row, rooks)
      }
      rooks++;
      row--;
    }
  } else {
    solutionCount++;
  }

}
console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = new Board({ 'n': n });

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = 0;
  new Board({ 'n': n });

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
