/*
* Given two strings, write a function to determine if the second string is an anagram of the first.
* An anagram is a word, phrase, or name formed by rearranging the letters of another,
* such as cinema, formed from iceman.
*
* validAnagram('', '') // true
* validAnagram( 'aaz', 'zza') // false
* validAnagram( 'anagram', 'nagaram') // true
* validAnagram ("rat", "car") // false) // false
* validAnagram ( 'awesome', 'awesom') // false
* validAnagram 'qwerty' ,'geywrt') // true
* validAnagram( 'texttwisttime', 'timetwisttext') // true
* */

const validAnagram = (string1: string, string2: string) => {
    if (string1.length !== string2.length || string1 === string2) {
        return false;
    }
    if (string1 === '' && string2 === '') {
        return true;
    }

    const firstStringComposition = {}
    const secondStringComposition = {}

    for (let char of string1) {
        firstStringComposition[char] = (firstStringComposition[char] || 0) + 1;
    }
    for (let charOfSecond of string2) {
        secondStringComposition[charOfSecond] = (secondStringComposition[charOfSecond] || 0) + 1;
    }

    for (let key in firstStringComposition) {
        if (!(key in secondStringComposition)) {
            return false;
        }
        if (firstStringComposition[key] !== secondStringComposition[key]) {
            return false;
        }
    }
    return true
}

// 수정버전
const validAnagramFixed = (string1: string, string2: string) => {
    if (string1.length !== string2.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < string1.length; i++) {
        const letter = string1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < string2.length; i++) {
        const letter = string2[i];
        if (!lookup[letter]) {
            return false
        } else {
            //원래 string1에서 있던 문자와 일치하는 경우는 1을 빼서 최종적으로 0이 만들어지도록 한다.
            lookup[letter] -= 1;
        }
    }

    return true;
}

validAnagram('texttwisttime', 'timetwisttext')