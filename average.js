//평균 구하기
function solution(arr) {
    var answer = 0;
    answer = arr.reduce((sum, current) => sum + current, 0);
    answer /= arr.length;
    return answer;
}