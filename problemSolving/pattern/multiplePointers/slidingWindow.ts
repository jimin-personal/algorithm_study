/*
* Write a function called maxSubarraySum which accepts an array of integers and a number called n.
* The function should calculate the maximum sum of n consecutive elements in the array.
*
* 뒤에 주어진 숫자의 갯수만큼 앞의 배열에서 더했을때 최고값을 구하라.
* maxSubarraySum([1,2,5,2,8,1,5], 2) // 1+2 = 3 , 2+5 = 7, 5+2 = 7, 2+8 = 10, 8+1 = 9, 1+5 = 6 >> 10 이 최고값
* maxSubarraySum([],4)  // null
* */
/* Naive version */
const maxSubarraySum = (arr: number[], number: number) => {
    if (number > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - number + 1; i++) {
        let temp = 0;
        for (let j = i; j < number; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp
        }
    }
    return max;
}

/* Refactored 시간복잡도 O(N) - 합을 계산할때 기존합에서 맨앞의 값만 빼고 맨끝의 값을 더해주는 방식 슬라이딩형태로 배열을 이동하며 계산량을 최소화 함.*/
const maxSubarraySumRefactored = (arr: number[], number: number) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < number) {
        return null;
    }
    for (let i = 0; i < number; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = number; i < arr.length; i++) {
        tempSum = tempSum - arr[i - number] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}