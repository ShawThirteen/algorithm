function wStyle (s, row) {
	var unitLen = 2 * (row - 1);
	var sArr = s.split('');
	sArr.length = unitLen - (s.length % unitLen) + s.length;	// 补全长度

	var result = [];
	for (var i = 0; i < row; i++) {
		// 初始化结果值数组
		result[i] = [];
		for (var j = 0, len = sArr.length; j < len;) {
			if (i == 0) {	// 一层遍历，取首位
				result[0].push(sArr[j]);
			} else if (i == row - 1){	// 取顶点
				result[row - 1].push(sArr[j + row - 1]);
			} else {
				result[i].push(sArr[j + i]); 

				var lastItem = sArr[j + unitLen - i];	// 如果是补全位，就是undefined，不需要存储
				lastItem != undefined && result[i].push(lastItem); 
			}
			j += unitLen;
		}
		result[i] = result[i].join('');
	}

	return result.join('');
}
