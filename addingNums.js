// 4 KYU "Adding Big Numbers"
//https://www.codewars.com/kata/525f4206b73515bffb000b21

//DESCRIPTION:
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110

// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives
// MATHEMATICSBIG INTEGERSALGORITHMS


//P: Given 2 params str
//Return the 1 str which is the sum of both the str added up

//E: a = "12"
//   b = "1"
// result = "13"

//D = Str

//A = In order to solve this problem without needed BigInit
//We will do this step by step like if we were doing it by hand

//Init 4 vars
//Init sum which is the output containing our total 
//Init carry which is a var to hold and carry digits over when adding

//Init i and j
//i represent the ele of a and j is to b
//Note: we init the i and j to the end of the ele because we are adding from right to left of the strs

//Iterate under while i is not negative or j is non negative or carry is greater than 0

//inside the iteration to make it easier to understand we init 2 more vars
//  Digit1 assigned to be the number data type -> ele of a and if it does not exist then default to 0
//  Digit2 assigned to be the number data type -> ele of b and if it does not exist then default to 0

//Init a variable called digitSum to become the sum of digit1, digit2, and carry
//reassigned carry var to be floor of digitSum / 10 (math.floor) 
//  if a carry exist we should see 1 else floor would be a 0

//Next importance of reassigning sum to become (digitSum % 10) + sum 
//   reasoning in order to concat left to right we are assign this way

//remember to dec i and j here to have the loop process all eles until none remains

//return sum

function add(a,b){
    let carry = 0
    let sum = ""
    let i = a.length - 1
    let j = b.length - 1

    while(i >= 0 || j >= 0 || carry > 0){
        let val1 = i >= 0 ? +a[i] : 0
        let val2 = j >= 0 ? +b[j] : 0
        let totalVal = val1 + val2 + carry
        carry = Math.floor(totalVal/10)
        sum = (totalVal % 10) + sum

        i--
        j--
    }
    return sum
}
console.log(add("1","1")) //"2"
console.log(add("100","111")) //"2"