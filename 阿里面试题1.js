/*
阿里的面试题，但是在面试当时我写了个错的，所以结束后又思考了一下
这道题主要是考出栈入栈问题，当时一时没想出来，事后才发现如此
但是在思考过程中，又想到了一个旁门左道（只为了解决题目，不能用于实际生产）的写法，所以记录一下


2. 给定一个只包括 ‘(‘，’)’，’{‘，’}’，’[‘，’]’ 的字符串，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
*/
// 这个是正经写法，正常就是应该用这种方法解决这个问题
function check1 (str) {
  if (!str) {
    return true;
  }
  var left = ['{', '(', '['];
  var right = ['}', ')', ']'];
  var cache = [];
  
  for (var i = 0, len = str.length; i < len; i++) {
    var curStr = str[i];
    if (left.indexOf(curStr) > -1) {
      cache.push(curStr);
    } else if (curStr == ' ') {
      continue;
    } else {
      if (cache.pop() != left[right.indexOf(curStr)]) {
        return false;
      }
    }
  }
  if (cache.length) {
    return false;
  }
  return true;
}

/*
* 这个是旁门左道的写法，只为了解决这道题目
* 主要是利用正则的匹配，由内到外移除合法的字符串，剩下的就是不合法的
*/

function check (str) {
    str = str.replace(/s/g, '');

    var len = Math.ceil(str.length / 2);
    for (var i = 0; i < len; i++) {
        str = str.replace(/\{\}/g, '');
        str = str.replace(/\[\]/g, '');
        str = str.replace(/\(\)/g, '');
        if (!str) break; // 优化一点，可有可无
    }

    if (str.length > 0) {
        return false;
    }
    return true;
}

console.log(check("{{[]}[]}[]"));
console.log(check("{[}]"));
console.log(check("{[]}(){()}[()]"));