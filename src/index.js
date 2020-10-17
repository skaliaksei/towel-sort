
// You should implement your task here.

module.exports = function towelSort (matrix) {

    function recurseEven(arr) {
        if (Array.isArray(arr)) {
          let array = [];
          for (let i = 0; i < arr.length; i++) {
            array.push(arr[i]);
          }
          return array;
        }
        else {
          return arr;
        }

      }

    function recurseOdd(arr) {
    if (Array.isArray(arr)) {
        let array = [];

        for (let i = arr.length - 1; i >= 0; i--) {
            array.push(arr[i]);
        }
        return array;
    }
        else {
            return arr;
        }
    }

    console.log(matrix);

    if (matrix != undefined) {
        let resultArray = new Array();

        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
            resultArray = resultArray.concat(recurseEven(matrix[i]));
            } else {
            resultArray = resultArray.concat(recurseOdd(matrix[i]));
            }
        }

        matrix = resultArray;
        return matrix;

    }
    else {
        matrix = [];
        return matrix;
    }
}
