/*
题目描述
输入一个递增排序的数组和一个数字S，在数组中查找两个数，是的他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
输出描述:
对应每个测试案例，输出两个数，小的先输出。
ps: 此方法仅适用于js
*/

function FindNumbersWithSum(arr, sum)
{
    var obj = {};    // 定义一个对象,用来快速检索被检索的数字是否存在
    var reduce = sum - arr[0];  // 计算两两数字相加中最大的那个
    for (var i = 0, len = arr.length; i < len; i++) {
        obj[arr[i]] = true;     // 由于数字是否重复在此并无意义,所有只保存其中一个
        if (reduce <= arr[i]){
            break;             // 找到最大数字存在的位置,其后的数字就没用了
        }
    }
    
    var newArr = arr.slice(0, i + 1);   // 缩减被查询的数组的长度
    var returnArr = [];  // 定义一个返回数组,用来保存符合条件的两个数
    var min = Infinity;   // 定义一个最小值,用来存放当乘积最小时的值
    for (var i = 0, len = newArr.length; i < len; i++){
        if(obj[sum - newArr[i]]) {
            if (min > newArr[i] * (sum - newArr[i])) {
                min = newArr[i] * (sum - newArr[i]);
                returnArr = [newArr[i], sum - newArr[i]]
            }
        }
    }
    return returnArr;
}
