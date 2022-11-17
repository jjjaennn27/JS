function solution(num1, num2) {
    var answer = num1/num2;
    return Math.floor(answer);
}

//parseInt()과 Math.floor()의 차이

두 메서드는 양수일 경우 내림한 결과가 나옴
음수일 경우,
paresInt() 메서드는 올림 (소수점을 버리기 때문)
Math.floor() 메서드는 소수 첫째 자리에서 양수일 때처럼 내림