/*
经典算法题：
n个人排成一个圈,从第一个人开始报数,报到m的人出局,然后接着开始报数,再次报到m的继续出局,直到最后只剩一人

递归版本
解题思路：
定义一个数组n = [1,2,3,4,5,6,7,8], m = 3;
则第1次删除后是n = [1, 2, -3, 4, 5, 6, 7, 8], m = 3,       被删除的索引是f(1) = (m - 1) % n;
则第2次删除后是n = [1, 2, -3, 4, 5, -6, 7, 8], m = 3,      被删除的索引是f(2) = ((m - 1) + m) % n;
则第3次删除后是n = [-1, 2, -3, 4, 5, -6, 7, 8], m = 3,     被删除的索引是f(3) = (((m - 1) + m) + m) % n;
则第4次删除后是n = [-1, 2, -3 ,4, -5 ,-6, 7, 8], m = 3,    被删除的索引是f(4) = ((((m - 1) + m) + m) + m) % n;

f(4)  = ((((m - 1) + m) + m) + m) % n 
      = ((((m - 1) + m) + m) % n + m) % n
      = (f(3) + m) % n 
      = (f(4 - 1) + m) % n;

f(3)  = (((m - 1) + m) + m) % n
      = (((m - 1) + m) % n + m) % n
      = (f(2) + m) % n;
同理：
f(2) = (f(1) + m ) % n;
      
  

假设在x次后只剩一个人
那么索引f(x)：
  f(x) = (f(x - 1) + m) & n;
  f(x - 1) = ((f(x - 2) + m ) % n;
  ........
  f(2) = (f(1) + m ) % n;
  f(1) = (m - 1) % n;
  所以得到下面函数
*/

function LastRemaining_Solution(n, m)  
{  
    if (n===0) {  // 相当于数组不存在
        return -1;  
    }  
    if (n===1) {  // 只有一个人,则不删除
        return 0;  
    }  
    return (LastRemaining_Solution(n-1,m)+m)%n;  
}  