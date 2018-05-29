/*
经典算法题：
n个人排成一个圈,从第一个人开始报数,报到m的人出局,然后接着开始报数,再次报到m的继续出局,直到最后只剩一人
默认人数大于等于1
*/

function LastRemaining_Solution(n, m)
{
    var arr = [];
    while (arr.length < n) {   // 首先创建一个n长度的数组
        arr[arr.length] = arr.length;
    }
    
    var index = m - 1;            // 创建变量保存移除的人的位置,第一个被
    while (arr.length > 0) {     // 创建一个循环
        if (arr.length == 1) {     // 如果数组只剩下一个,则返回
            return arr[0];
        } else {                              //如果数组长度大余1
            index = index % arr.length;   // 判断index是否大于长度,如果大于则取余
            arr.splice(index, 1);         // 移除一人
            index = index - 1 + m;        // 因为删了一个数,数组长度少1,所以index-1使位置回到删除前的序列,再加上m
        }
    }
}
