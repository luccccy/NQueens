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
window.findNRooksSolution = function(n) {

  var solution = new Board({n: n});
  var isFound = false;
  //we assume that the rows befor k is placed already, now we condiser about the kth row.
  var addPiece = function(k) {
    //if we finished kth row that represent we arrived nth row, we find the solve, return the solve.
    if (k === n) {
      isFound = true;
      // true mean found the result.
      return;
    }

    for (var i = 0; i < n; i++) {
      solution.togglePiece(k, i);
      if (!solution.hasAnyRooksConflicts()) {
        addPiece(k + 1);
        if (isFound) {
          return;
        }
      }
      solution.togglePiece(k, i);
    }
  };

  addPiece(0);

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();

  //use loop to solve this problem.
  // var solution = new Board({n: n});

  // for (var i = 0; i < n; i++) {
  //   for (var j = 0; j < n; j++) {
  //     solution.togglePiece(i, j);
  //     if (solution.hasAnyRooksConflicts()) {
  //       solution.togglePiece(i, j);
  //     }
  //   }
  // }

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution.rows();
};






// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solution = new Board({n: n});
  // var countsOfSolutions = 0;
  // //we assume that the rows befor k is placed already, now we condiser about the kth row.
  // var addPiece = function(k) {
  //   //if we finished kth row that represent we arrived nth row, we find the solve, return the solve.
  //   if (k === n) {
  //     countsOfSolutions += 1;
  //     // true mean found the result.
  //     return;
  //   }

  //   for (var i = 0; i < n; i++) {
  //     solution.togglePiece(k, i);
  //     if (!solution.hasAnyColConflicts()) {
  //       addPiece(k + 1);
  //     }
  //     solution.togglePiece(k, i);
  //   }
  // };

  // addPiece(0);

  // // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return countsOfSolutions;

  var solution = new Board({n: n});
  var countsOfSolutions = 0;

  var filledCols = new Array(n).fill(0);

  //we assume that the rows befor k is placed already, now we condiser about the kth row.
  var addPiece = function(k) {
    //if we finished kth row that represent we arrived nth row, we find the solve, return the solve.
    if (k === n) {
      countsOfSolutions += 1;
      // true mean found the result.
      return;
    }

    for (var i = 0; i < n; i++) {
      solution.togglePiece(k, i);
      if (filledCols[i] === 0) {
        filledCols[i] = 1;
        addPiece(k + 1);
        filledCols[i] = 0;
      }
      solution.togglePiece(k, i);
    }
  };

  addPiece(0);

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return countsOfSolutions;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n});
  var isFound = false;
  //we assume that the rows befor k is placed already, now we condiser about the kth row.
  var addPiece = function(k) {
    //if we finished kth row that represent we arrived nth row, we find the solve, return the solve.
    if (k === n) {
      isFound = true;
      // true mean found the result.
      return;
    }

    for (var i = 0; i < n; i++) {
      solution.togglePiece(k, i);
      if (!solution.hasAnyQueensConflicts()) {
        addPiece(k + 1);
        if (isFound) {
          return;
        }
      }
      solution.togglePiece(k, i);
    }
  };

  addPiece(0);

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = new Board({n: n});
  var countsOfSolutions = 0;
  //we assume that the rows befor k is placed already, now we condiser about the kth row.
  var addPiece = function(k) {
    //if we finished kth row that represent we arrived nth row, we find the solve, return the solve.
    if (k === n) {
      countsOfSolutions += 1;
      // true mean found the result.
      return;
    }

    for (var i = 0; i < n; i++) {
      solution.togglePiece(k, i);
      if (!solution.hasAnyQueensConflicts()) {
        addPiece(k + 1);
      }
      solution.togglePiece(k, i);
    }
  };

  addPiece(0);

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return countsOfSolutions;
};