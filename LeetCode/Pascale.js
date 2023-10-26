// https://leetcode.com/problems/pascals-triangle/submissions/1084262536/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows == 1) {
        return [[1]]
    } else if (numRows == 2) {
        return [[1], [1, 1]]
    } else {
        var resultArr = [[1], [1, 1]];
        for (var i = 1; i < numRows - 1; i++) {
            var subArr = [1];
            for (j = 1; j < resultArr[i].length; j++) {
                subArr.push(resultArr[i][j] + resultArr[i][j - 1]);
            }
            subArr.push(1);
            resultArr.push(subArr);
        }
        return resultArr
    }

};