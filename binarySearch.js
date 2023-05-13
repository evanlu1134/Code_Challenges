// In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, 
//is a search algorithm that finds the position of a target value within a sorted array. 
//Binary search compares the target value to the middle element of the array. 
// Worst complexity: O(log n)
// Average complexity: O(log n)
// Best complexity: O(1)
// Space complexity: O(1)
// Class: Search algorithm
// Data structure: Array

function findTarget(nums,target){
    //Step 1: Always work with a sorted arr
    const sorted = nums.sort((a,b) => a - b)
    //Step 2: Create 2 pointers left and right to keep track of mid later
    let left = 0
    let right = sorted.length - 1

    //step 3: While left is less than equal to right we can exhaust the poss as we move and compare later
    while(left <= right){

    //Step 4: Important we assign our mid here as we continue to iterate mid is always changing and updating 
    //depending as we shift either left or right to our target
    //    note we used Math.floor to go the lowest whole number index
    let mid = Math.floor((left+right)/2)

    //Step 5 best case first is if we can check the curr ele matches our target we can return it
        const curr = nums[mid]

        if(curr === target){
            return true
        //else we shift up or down everytime as we divide and conquer to find our target every iteration:

        //A.this case if our curr ele is less than than target we go up
        //Ex: [1,2,3] target is 3
        //Mid: 2 
        //2 < 3
        //left -> right
        //[2,3]
        //prevMid = 2
        //left = mid + 1
        //Curr: 3 matches 3
        } else if (curr < target){
            left = mid + 1 //UP



        //B. or if curr ele is greater than than target we go down
        //Ex: [1,2,3] target is 1
        //Mid: 2 
        //2 > 1
        //left <- right
        //[1,2]
        //prevMid = 2
        //right = mid - 1
        //Curr: 1 matches 1
        } else if (curr > target){
            right = mid - 1 //DOWN
        }
    }

    //For any edge case of target not existing 
    return false
}
console.log(findTarget([5,3,1,2,0],1))
console.log(findTarget([-1,5,3,-3,1,2,-6,0],3))
console.log(findTarget([-13,-33,13,2,-6,0],1))