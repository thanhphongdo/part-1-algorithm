function palindromeCheckerV1(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage:
console.log('Palindrome Checker V1:');
console.log(palindromeCheckerV1('kayak'));
console.log(palindromeCheckerV1('abba'));
console.log(palindromeCheckerV1('A man, a plan, a canal: Panama'));
console.log(palindromeCheckerV1('tims'));
console.log(palindromeCheckerV1('abab'));

/* I have another solution that is not based on the js string built-in functions */
function palindromeCheckerV2(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const strLength = cleanedStr.length;
    const centerPosition = Math.floor(strLength / 2);
    for (let i = 0; i < centerPosition; i++) {
        if (cleanedStr[i] !== cleanedStr[strLength - i - 1]) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log('Palindrome Checker V2:');
console.log(palindromeCheckerV2('kayak'));
console.log(palindromeCheckerV2('abba'));
console.log(palindromeCheckerV2('A man, a plan, a canal: Panama'));
console.log(palindromeCheckerV2('tims'));
console.log(palindromeCheckerV2('abab'));