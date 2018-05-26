/*题目：小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列?
输出描述:输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序*/

// 和为s的连续正数序列加和解法3
// 原理: 每次以i为起点,计算之后的j个数字的和,如果=sum,保存数组,结束此次循环,i+i再次累加计算,直到i = sum / 2 + 1
// 此方法太耗资源,不合理

function FindContinuousSequence(sum)
{
    var maxLen = parseInt(sum / 2) + 1;  // 计算出累加数组中的最大数,当数组长度为2的时候,存在最大数且不会大于(sum / 2) + 1;
    var tmpArr = []; // 创建临时数组,用来存放各个分数组
     
    for (var i = 1; i < maxLen;i++) { // 假设每个数组的开头是i
        var saveArr = [];
        var result = 0;
        for (var j = i; j <= maxLen; j++) { // 从i向后延伸j个长度,计算每次延伸的时候该数组的和
            saveArr[j - i] = j;
            result += j;
            if (result == sum) {  // 如果和==sum,那么保存数组,j不在延伸,数组的i加一(数组开头向后位移一位)
                tmpArr.push(saveArr);
                break;
            } else if (result > sum) { // 如果加和大于sum,说明本次以i开头的数组不合法
                break;
            }
        }
    }
    
    tmpArr.sort(function (a, b) {
        return a[0] - b[0]
    })
    return tmpArr;
}

function countArr (arr) {
    var result = 0;
    for (var i = arr.length; i--;) {
        result += arr[i];
    }
    return result;
}
