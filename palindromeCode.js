//LeetCode 125. Valid Palindrome

//Link: https://leetcode.com/problems/valid-palindrome/description/
// Easy
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
const isPalindrome = function(s) {
    const newStr = s.replace(/[^A-Z0-9]/gi, "").toLowerCase()

    //sol 1: compare shallow copy reversed
    // return newStr.split("").reverse().join("") === newStr

    //sol 2: comparing the front to back chars better sol
    let l = 0
    let r = newStr.length - 1

    while(r > l){
        if(newStr[l] !== newStr[r]) return false
        l++
        r--
    }
    return true
}
console.log("===Level 1===")
console.log(isPalindrome("A man, a plan, a canal: Panama")) //T
console.log(isPalindrome("race a car"))//F
console.log(isPalindrome(" "))//T
console.log(isPalindrome("!"))//T
console.log(isPalindrome("1"))//T


//Part 2
//680. Valid Palindrome II
//link: https://leetcode.com/problems/valid-palindrome-ii/description/
// Easy
// 7K
// 361
// Companies
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 
// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:
// 1 <= s.length <= 105
// s consists of lowercase English letters. * a-z only

// Accepted
// 582.5K
// Submissions
// 1.5M
// Acceptance Rate
// 39.3%

const validPalindrome = function(s) {
    let l = 0
    let r = s.length - 1

    while(r > l){
        if(s[l] !== s[r]) return isValidDelete(s, l + 1, r) || isValidDelete(s, l, r - 1)
        l++
        r--
    }
    return true

    function isValidDelete(str, l, r){
        while(r > l){
        if(s[l] !== s[r]) return false
        l++
        r--
        }
        return true
    }
};

console.log("===Level 2===")
console.log(validPalindrome("aba")) //T
console.log(validPalindrome("abc"))//F
console.log(validPalindrome("a"))//T
console.log(validPalindrome("tcaac"))//T
console.log(validPalindrome("rawar"))//T
console.log(validPalindrome("acae"))//T