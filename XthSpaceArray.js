//x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
    var answer = new Array();
    for(let i = 0; i<n; i++){
        let num = x + (i*x);
        answer.push(num);
    }
    return answer;
}