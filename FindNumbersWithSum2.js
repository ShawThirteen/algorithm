/*
题目描述
输入一个递增排序的数组和一个数字S，在数组中查找两个数，是的他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
输出描述:
对应每个测试案例，输出两个数，小的先输出。

ps：通用解法
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
    var limitR = newArr.length;  // 创建一个右边界符,当最右边的数字用过一次,那么下次的的加和数字一定在此之前
    
    for (var i = 0, len = newArr.length; i < len; i++){
        for (var j = i + 1; j < limitR; j++) {  // 遍历每个数字i,将i与i之后的每一个数字相加,对比sum
            var tmpSum = newArr[i] + newArr[j];
            if (tmpSum == sum) {
                limitR = j;                     // 当加和与sum相等,又边界向左移动,可以理解为每个数字只用一次
                if (min > tmpSum) {
                    min = tmpSum;
                    returnArr = [newArr[i], newArr[j]];
                }
            }
        }
    }
}
