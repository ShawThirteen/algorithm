/*
数组去重有很多种方法
比如嵌套循环,递归,利用splice,或者object的快速查找,Set(),indexOf等方法
这里利用indexOf与lastIndexOf()给出一个比较优的算法
代码比较简单,不在赘述
*/


function uniqueArray (arr) {

    arr.sort(); // 将数组排序,把相同的元素都排在一起
    
    var saveArr = [];
    for (var i = 0, len = arr.length; i < len;) {
        saveArr.push(arr[i]);   // 保存当前元素
        if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
            i = arr.lastIndexOf(arr[i]) + 1;      // 如果当前元素是重复的,右移i的值到新的元素位置
        } else {
            i++;      // 如果当前元素不重复,i++
        }
    }
    return saveArr;
}
