function diagonalSums (matrix) {
    let innerArr = matrix[0];
    let sumMain = 0;
    let sumSecond = 0;
    let secondDiagonalIndex = innerArr.length - 1;

    for (let i = 0; i < matrix.length; i++) {
        let mainDiagonalEl = matrix [i][i];
        let secondDiagonalEl = matrix[i][secondDiagonalIndex--];
        sumMain += mainDiagonalEl;
        sumSecond += secondDiagonalEl;
    }
    console.log(`${sumMain} ${sumSecond}`);
}
diagonalSums ([[3,5,17],[-1, 7 , 14],[1, -8, 89]])