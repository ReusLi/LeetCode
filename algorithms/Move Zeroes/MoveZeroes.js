/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 1. 必须在原数组上操作，不能拷贝额外的数组。
 * 2. 尽量减少操作次数。
 */
var moveZeroes = function(nums) {
    var zeroNum = 0
    for (var i = 0, len = nums.length; i <= len; i++) {
        var value = nums[i]
        if (value === 0) {
            nums.splice(i, 1)
            len--
            i--
            zeroNum++
        }
    }
    
    for (var i = 0; i < zeroNum; i++)
        nums.push(0)

    return nums
}


var nums = moveZeroes([0,0,1])
console.log(nums)