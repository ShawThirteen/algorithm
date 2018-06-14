/*
给定一个由数字与英文字母组成的字符串,编码实现
输入出现次数最多的单个或者多个连续纯数字组成的数值,出现几次？
如果次数相同,输出对应数值最大的一个


解题思路：
 1 拆分字符串,将所有的连续数字拆出来
 2 将拆出的连续数字重新组和,列出所有存在的组合
 3 利用对象计数,并输出最大值
 
 如getValue('45a456asd21asd3asd458asds8asdaas9')
 返回 
 {
    result: 45, 
    times: 3
 }
 
 ps: 该题是我现在公司17年的晋升中级前端的考试题之一
*/
// 主函数,返回一个对象
function getValue(str)
{
    var saveArr = [];  // 创建一个临时数组,用来保存被重组后的数组
    var numArr = str.match(/\d+/g);  // 获取字符串中的所有的连续的数字 如'123a34' 被拆成[123,34]
    for (var i = numArr.length; i--;) {
        saveArr = saveArr.concat(transform(numArr[i]));   // 将每个数组元素重组并保存到saveArr
    }
    
    return numCount(saveArr);   // 计算每个元素出现的次数
}


// 重组数组元素
function transform (num) {
    var saveArr = [];   // 创建临时数组,用来保存重组后的数字
    var str = String(num);
    var len = str.length;
    for (var i = 1; i <= len; i++){    // 循环数组
        for (var j = 0; j <= len - i; j++){ // 重组,将"123"组成1,2,3,12,23,123
            saveArr.push(str.substr(j, i))
        }
    }
    return saveArr;
}

function numCount (arr) {
    var saveObj = {};    // 临时对象,用来计数元素出现的次数
    var saveArr = [];    // 临时数组,用来保存出现次数最大的数
    var max = 0;         // 保存元素出现的最大次数
    
    for (var i = arr.length; i--;){   // 基于对象的计数器,计算数字出现的次数
        if (saveObj[arr[i]]) {
            saveObj[arr[i]]++;  // 例如obj[2]已经存在,则++
        } else {
            saveObj[arr[i]] = 1; // 不存在则初始化=1
        }
    }
    for (var o in saveObj) {  // 计算每个元素出现的次数
        if (saveObj[o] > max){     // 如果当前元素的出现次数大于max
            saveArr = [o];         // 清空已经存在的数组,并将当前元素保存
            max = saveObj[o];      // 重新赋值最大次数
        } else if (saveObj[o] == max) {  // 如果该元素出现的次数与其他元素同为最大次数,则保存该元素
            saveArr.push(o)
        }
    }
    return {
        result: Math.max.apply(null, saveArr),      // 将出现次数相同的元素中最大的数取出
        times: max
    }
}
