/*
题目描述
小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? 
输出描述:
输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序
*/

// 此题为和为s的连续正数数列解法2
// 与解法1不同的原理在于
// 解法1： 求出所有合法的数组的长度i,根据i计算出左边界然后求出合法数组
// 解法2： 求出连续加和数组允许的长度的最大值maxLen,假设小于maxLen的所有长度i都是合法的
//         根据长度i计算出左边界并求出数组,通过比对数组的累加和与sum筛选真正合法的数组
function FindContinuousSequence(sum)
{
    var result = 0;
    var maxLen = 0;
    for (var i = 1; i <= sum; i++) {   // 求出连续加和数组长度的最大值
        result += i;
        if (result > sum) {
            maxLen = i - 1;
            break;
        }
    }
    
    var tmpArr = [];   // 创建临时数组
    for (var i = 2; i <= maxLen; i++){
        // 求出左边界
        // 由于已知最大的数组长度是maxLen,我们假设每一个小于maxLen的数都是一个合法的（累加和=sum）数组的长度
        // 当长度为i,数组的做边界值应该是sum / i - i / 2, i是偶数取整后不变,i是奇数,边界值会偏小要向上取整
        // 例如9 = 2 + 3 + 4, i = 3;那么边界值是9/3 - 3/2向上取整是2
        var limitL = Math.ceil(sum / i - i / 2); 
        var saveArr = []; // 临时数组,用来存放可累加数组的值
        var result = 0; // 临时变量,用来存储当前数组的加和
        
        for (var n = 0; n < i; n++) {
            result += (limitL + n);
            saveArr[n] = limitL + n; // 因为已经确定了当前累加数组的长度为i,所以每个值都是左边界limitL+n
        }
        if (result == sum) { // 计算每个数组的加和,去除不合法的数组
            tmpArr.push(saveArr);
        }
    }
    tmpArr.sort(function (a, b) {
        return a[0] - b[0]
    })
    return tmpArr;
}


