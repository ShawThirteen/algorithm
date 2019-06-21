function algorithmic (s, row) {
	if (row <= 1) return s;
	var unitArr = [];	// 用来存元数据
	var unitLen = 2 * (row - 1);	// 一个元的长度
	var applyUnitLen = 2 * row - 1;	// 一个补元的长度
	var strArr = s.split('');
	var len = 0;

	while (len = strArr.length, len > 0) {
		var unitItem = strArr.splice(0, unitLen);
		if (unitItem.length < applyUnitLen) {
			// 计算所有的元数据，并将最后一个元补全
			unitItem = unitItem.concat(new Array(applyUnitLen - unitItem.length));
		}
		// 存元
		unitArr.push(unitItem);
	}

	var unitArrLen = unitArr.length;	// 存元数组的长度
	var result = Array(row);		// 元数组的转置数组
	result[row - 1] = [];		// 设顶点位置为数组

	// 遍历元数组
	for (var i = 0; i < unitArrLen; i++) {
		var curItem = unitArr[i];
		for (var j = 0; j < row - 1; j++) {
			// 元数组的元素，首尾拼接
			curItem[j] = curItem[j] + (curItem[applyUnitLen - 1 - j] || '');
			if (!result[j]) {
				result[j] = [];
			}
			// 转置
			result[j].push(curItem[j]);
		}
		result[row - 1].push(curItem[row - 1]);
	}

	var resStr = '';
	for (var i = 0; i < row; i++) {
		// 遍历拼接结果字符串
		resStr += result[i].join('');
	}

	return resStr;
}
