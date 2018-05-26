/*题目：小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列?
输出描述:输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序*/

// 和为s的连续正数序列解法4
// 此解法为网络通用版
// 首先定义一个左右边界,如果边界内的加和小于sum,右边界++,边界内加和+新右边界
// 如果边界内加和大于sum,则加和-左边界,左边界++
// 此方法同样不适用于过大的数字,如果数字过大,解法1于解法2会更适合


function FindContinuousSequence(sum)
{
    var l = 1;
    var r = 2;
    var curSum = l + r;
    var tmpArr = [];
    
    var middle = (1 + sum) / 2;
    while (l < middle) {
        var saveArr = [];
        if (curSum == sum) {
            for (var i = l; i <= r; i++) {
                saveArr.push(i);
            }
            tmpArr.push(saveArr);
        }
        
        while (curSum > sum && l < middle) {
            curSum -= l;
            l++;
            if (curSum == sum) {
                for (var i = l; i <= r; i++) {
                    saveArr.push(i);
                }
                tmpArr.push(saveArr);
                break;
            }
        }
        r++;
        curSum += r;
    }
    return tmpArr;
}
