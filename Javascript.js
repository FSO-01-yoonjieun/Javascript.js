// ### 조건문 (`if`, `else`, `switch`) 관련 문제

// - **문제 1**: 숫자를 입력받아 그 숫자가 짝수이면 "짝수입니다"를, 홀수이면 "홀수입니다"를 출력하는 함수를 작성하세요.


function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("짝수입니다");
    } else {
        console.log("홀수입니다");
    }
}

checkEvenOdd(10);

// - **문제 2**: 나이를 입력받아 18세 이상이면 "성인입니다", 그렇지 않으면 "미성년자입니다"를 출력하는 함수를 작성하세요.
    
function checkAge(age) {
    if (age >= 18) {
        console.log("성인입니다");
    } else {
        console.log("미성년자입니다");
    }
}

checkAge(20);
    
// - **문제 3**: `switch`문을 사용하여 요일(1~7)을 입력받고 해당 요일의 이름을 출력하는 프로그램을 작성하세요. (1은 월요일, 7은 일요일)
    
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("월요일");
            break;
        case 2:
            console.log("화요일");
            break;
        case 3:
            console.log("수요일");
            break;
        case 4:
            console.log("목요일");
            break;
        case 5:
            console.log("금요일");
            break;
        case 6:
            console.log("토요일");
            break;
        case 7:
            console.log("일요일");
            break;
        default:
            console.log("잘못된 입력입니다. 1부터 7까지의 숫자를 입력하세요.");
    }
}

getDayName(4);

// ### 반복문 (`for`, `while`, `do-while`) 관련 문제

// - **문제 4**: 1부터 100까지의 숫자 중에서 짝수만 출력하는 `for` 반복문을 작성하세요.
    
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }

// - **문제 5**: `while` 문을 사용하여 5부터 15까지의 숫자를 출력하는 프로그램을 작성하세요.
    
    let i = 5;
    while (i <= 15) {
        console.log(i);
        i++;
    }

// - **문제 6**: `do-while` 문을 사용하여 사용자가 입력한 숫자가 10이 될 때까지 숫자를 계속 입력받고, 입력된 숫자를 출력하는 프로그램을 작성하세요.
    
// function inputUntilTen() {
//     let number; // 사용자 입력을 저장할 변수

//     do {
//         // t()를 사용하여 사용자로부터 숫자를 입력받음 (브라우저 환경에서만 작동)
//         number = parseInt(t("입력값"));
//         console.log(number); // 입력된 숫자를 출력
//     } while (number !== 10); // 입력된 숫자가 10이 아닐 때까지 반복
// }

// inputUntilTen(2);

// ### 함수 선언과 호출 관련 문제

// - **문제 7**: 두 개의 숫자를 더하는 함수 `addNumbers`를 선언하고, 해당 함수를 호출하여 결과를 출력하세요.
    
function addNumbers(a, b) {
    return a + b; 
}

const result = addNumbers(3, 5); 
console.log(result); 
    
// - **문제 8**: 세 개의 숫자를 곱한 결과를 반환하는 함수 `multiplyNumbers`를 선언하고 호출하여 결과를 출력하세요.
    
function multiplyNumbers(a, b, c) {
    return a * b * c;
}

console.log(multiplyNumbers(1, 3, 4));
    
// - **문제 9**: 이름을 인자로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수 `greet`를 선언하고 호출하세요.
    
function greet(name) {
    console.log(`안녕하세요, ${name}님!`);
}

greet("윤지은");

// ### 함수 표현식 관련 문제

// - **문제 10**: 두 숫자의 차를 구하는 함수 표현식을 작성하고 이를 호출하여 결과를 출력하세요.

const subtract = function(a, b) {
    return a - b;
};

const result3 = subtract(10, 4);
console.log(result3);

// - **문제 11**: 세 개의 숫자를 더한 값을 반환하는 함수 표현식을 작성하고, 이를 호출하여 결과를 출력하세요.

const sum = function(a, b, c) {
    return a + b + c; 
};

const result4 = sum(5, 10, 15); 
console.log(result4); 


// ### 화살표 함수 관련 문제

// - **문제 12**: 두 숫자를 더한 값을 반환하는 화살표 함수를 작성하고 호출하여 결과를 출력하세요.

const add = (a, b) => a + b;

console.log(add(7, 3));

// - **문제 13**: 숫자를 제곱하여 반환하는 화살표 함수를 작성하고 호출하여 결과를 출력하세요.

const square = (n) => n * n;

console.log(square(4));

// - **문제 14**: 배열을 입력받아 배열의 각 요소에 2를 곱한 새로운 배열을 반환하는 화살표 함수를 작성하세요. (`map` 메소드를 사용하세요)

const doubleArray = (arr) => 
    arr.map((element)=>{
        return element * 2;

    });

console.log(doubleArray([1, 2, 3, 4, 5]));

// - **문제 15**: 나이를 인자로 받아 "성인" 또는 "미성년자"를 반환하는 화살표 함수를 작성하세요.

const checkAge1 = (age) => age >= 19 ? "성인" : "미성년자";
console.log(checkAge1(19));


// ### 조건문 (`if`, `else`, `switch`) 관련 문제

// - **문제 16**: 두 개의 숫자를 입력받아, 큰 숫자를 출력하는 함수를 작성하세요.
    
function findMax(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

findMax(7, 10);
    
// - **문제 17**: 학생의 점수를 입력받아 90점 이상은 'A', 80점 이상은 'B', 70점 이상은 'C', 그 이하는 'F'를 출력하는 프로그램을 작성하세요.
    
function grade(score) {
    if (score >= 90) {
        console.log('A');
    } else if (score >= 80) {
        console.log('B');
    } else if (score >= 70) {
        console.log('C');
    } else {
        console.log('F');
    }
}

grade(85);

// - **문제 18**: `switch`문을 사용하여 사용자가 입력한 달(month)에 맞는 계절을 출력하는 프로그램을 작성하세요. (예시: 3 ~ 5월은 봄, 6 ~ 8월은 여름, 9 ~ 11월은 가을, 12 ~ 2월은 겨울)
    
function Season(month) {
    switch (month) {
        case 3:
        case 4:
        case 5:
            console.log('봄');
            break;
        case 6:
        case 7:
        case 8:
            console.log('여름');
            break;
        case 9:
        case 10:
        case 11:
            console.log('가을');
            break;
        case 12:
        case 1:
        case 2:
            console.log('겨울');
            break;
        default:
            console.log('존재하지 않음');
            break;
    }
}

Season(5);


// ### 반복문 (`for`, `while`, `do-while`) 관련 문제

// - **문제 19**: `for`문을 사용하여 1부터 10까지의 숫자의 합을 구하는 프로그램을 작성하세요.
    
function sumNumbers() {
    let sum = 0;
    
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    
    console.log(sum);
}

// - **문제 20**: `while`문을 사용하여 1부터 20까지의 숫자 중 3의 배수를 출력하는 프로그램을 작성하세요.
    
function printMultiplesOfThree() {
    let i = 1;
    
    while (i <= 20) {
        if (i % 3 === 0) { 
            console.log(i); 
        }
        i++; 
    }
}

printMultiplesOfThree();


// - **문제 21**: `do-while`문을 사용하여 0부터 100까지의 숫자 중 10의 배수를 출력하는 프로그램을 작성하세요.
    
function printMultiplesOfTen() {
    let counter = 0; 
    
    do {
        if (i % 10 === 0) { 
            console.log(counter); 
        }
        counter += 10; 
    } while (counter <= 100); 
}

printMultiplesOfTen();

// - **문제 22**: 세 개의 숫자 중에서 가장 큰 숫자를 찾는 함수를 선언하고 호출하세요.

function findMaxOfThree(a, b, c){
    return Math.max(...[a, b, c])
}

// function numbermax(a, b, c) {
//     const max = Math.max(a, b, c);
//     console.log(max);
// }node Javascript.js

// numbermax(5, 10, 8);

findMaxOfThree(5, 10, 8);

// - **문제 23**: 두 문자열을 입력받아 두 문자열이 동일하면 "동일함"을, 그렇지 않으면 "동일하지 않음"을 출력하는 함수를 작성하세요.
    
function compareStrings(str1, str2) {
    if (str1 === str2) {
        console.log("동일함"); 
    } else {
        console.log("동일하지 않음"); 
    }
}

compareStrings("hello", "hello");
compareStrings("hello", "follow");
    
// - **문제 24**: 배열을 입력받아 배열에 있는 숫자들의 평균을 계산하는 함수를 작성하세요.
    
function calculateAverage(numbers) {
   let result = 0;

   for (let i = 0; i < numbers. length; i++) {
    result += numbers[i];
   }

   console.log(result / numbers.length)
}

calculateAverage([1, 2, 3, 4, 5]);

// ### 함수 표현식 관련 문제

// - **문제 25**: 배열의 모든 요소를 제곱한 값을 반환하는 함수 표현식을 작성하고, 이를 호출하세요.

const squareArray = function(arr) {
    return arr.map((element) => element ** 2);
};

console.log(calculateAverage([1, 2, 3, 4, 5]));

// - **문제 26**: 두 문자열을 합친 후, 그 길이를 반환하는 함수 표현식을 작성하세요. (Hint: String.prototype.lengtn)

const combineAndLength = function(str1, str2) {
    return (str1 + str2).length;
};


console.log(combineAndLength("hi, ", "mimi!"));



// - **문제 27**: 배열에서 가장 큰 숫자를 찾는 함수 표현식을 작성하세요.

const findMaxInArray = function(arr) {
    return Math.max(...arr);
};

console.log(findMaxInArray([7, 5, 32, 9, 24]));

// ### 화살표 함수 관련 문제

// - **문제 28**: 두 문자열을 입력받아 그 길이를 비교하고, 더 긴 문자열을 반환하는 화살표 함수를 작성하세요.

const getLongerString = (str1, str2) =>{
    if (str1.length > str2. length){
        return str1;
    } else{
        return str2;
    }
};

console.log(getLongerString("meme", "sad"));


// - **문제 29**: 숫자로 이루어진 배열을 입력받아, 배열의 모든 요소에 5를 더한 새로운 배열을 반환하는 화살표 함수를 작성하세요.

const addFiveToArray = (arr) => {
    return arr.map((element)=> {
        return element + 5;
    });
};

console.log(addFiveToArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// - **문제 30**: 세 개의 숫자를 입력받아, 세 숫자의 합이 100 이상이면 "합격", 그렇지 않으면 "불합격"을 반환하는 화살표 함수를 작성하세요.

const checkSum = (a, b, c) => {
    const result = a + b + c;

    if (result >= 100){
        console.log("합격입니다!");
    } else { 
        console.log("불합격입니다.");
    }
};

checkSum(33, 33, 34);
