/*
题目描述
给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法

解题目思路：
最普遍的解法嵌套for循环,跳过第i个值,这里不多说
另一种解法
例如A[1,2,3,4];
那么
B[0] = A[1] * A[2] * A[3] = 24;
B[1] = A[0] * A[2] * A[3] = 12;
B[2] = A[0] * A[1] * A[3] = 8;
B[3] = A[0] * A[1] * A[2] = 6;

我们假设
  B[i] = C[i] * D[i];
那么
  C[0] = 无
  C[1] = a[0]
  C[2] = a[0] * a[1]
  C[3] = a[0] * a[1] * a[2];
如果我们让C[0] = 1,很容易看出c[i + 1] = c[i] * a[i];
  
  D[0] = A[1] * A[2] * A[2];
  D[1] = A[2] * A[3]
  D[2] = A[3]
  D[3] = 无
如果我们让D[3] = 1,很容易得出D[i - 1] = D[i] * A[i]
所以我们可以先用两个for循环将CD求出,继而得到B数组
代码如下
*/
function multiply(arr)
{
    var saveArr = [];   // 创建返回数组
    var leftArr = [1];    // 左半边的数组,C[0] = 1;
    var rightArr = [];    // 右半边的数组
    
    // 首先计算出左边数组
    for (var i = 0, len = arr.length; i < len; i++) {
        leftArr[i + 1] = leftArr[i] * arr[i];
    }

    rightArr[len - 1] = 1;  // 右边数组的最后一位等于1
    for (i = len; i > 1; i--) {
        rightArr[i - 2] = rightArr[i - 1] * arr[i - 1];
    }

    for (i = 0; i < len; i++) {
        saveArr[i] = leftArr[i] * rightArr[i];
    }
    return saveArr;
}
