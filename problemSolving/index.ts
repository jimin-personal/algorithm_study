/*
* White a function which takes two numbers and returns their sum.
*
*  - 나만의 단어로 문제를 만들기: 'Implement addition'
*  - 인풋은 무엇인가? int? float? what about string for large numbers?
*  - 출력값은 무엇인가? int? float? string?
*  - 문제를 해결하기위해 충분한 정보를 가지고있는가?(인풋만으로 해결이 가능한가?)
*  - 문제의 일부나 데이터의 일부를 내가 어떻게 라벨링 하는게 좋을까.?
* */

/*
* 문제의 세분화 - 확신이 들지 않는 문제를 짚어나갈 수 있음.
*
* 예시문제: Write a function which takes in a string and returns counts of each character in the string.
* 1: 몇가지 예시를 작성한다.
* 2: 함수를 작성한다. 각 함수의 기능을 세세하게 작성 (루프가 들어갈 부분, 각 문자를 키값으로 두고 그 키값이 가지는 값들을 메모해둔다)
* 3: 반환값을 작성한다.
*
*
* // 유사(의사) 코드를 작성해서 미리 틀을 잡는것은 코드의 설계가 어느정도 가능하다는 것을 보여준다.이는 완벽한 코드를 작성해내지 못해도 분명한 가산점을 받을 수 있다.
* */

// 리팩토링 전
// const charCount = (str) => {
//     const obj = {};
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i].toLowerCase();
//         if (/a-z0-9/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }

// 리팩토링 후
const charCount = (str) => {
    const obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) { // 정규식의 경우 브라우저를 탈수 있기때문에 알파벳코드를 가지고 판별하는 함수를 새로 짜줌
            char = char.toLowerCase(); // 영문자인지 확인한 후에 소문자로 변경해주는게 흐름이 더 좋다.
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

const isAlphaNumeric = (char: string) => {
    const code = char.charCodeAt(0);
    // 47 < code < 58 = 숫자, 64 < code < 91 = 알파벳대문자, 96 < code < 123 = 알파벳소문자
    return !(!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123));
}
