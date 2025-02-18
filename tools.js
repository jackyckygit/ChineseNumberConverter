const chineseToNumberMap = {
    'O': 0,
    '零': 0,
    '一': 1,
    '二': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6,
    '七': 7,
    '八': 8,
    '九': 9,
    '十': 10,
    '拾': 10,
    '廿': 20,
    '叁': 30,
    '卅': 30,
    '百': 100,
    '千': 1000,
    '萬': 10000,
    '万': 10000,
    '億': 100000000,
    '亿': 100000000
};

// converts Chinese numbers into an Arabic Number
function convertChineseNumber(chineseNumber) {
    let temp = 0;
    let unit = 1;
    let digitOnly = true;

    for (let i = chineseNumber.length - 1; i >= 0; i--) {
        const char = chineseNumber[i];
        const num = chineseToNumberMap[char];

        if (num >= 10) {
            // a unit char exists in the number
            digitOnly = false;
        }

        if (num >= 10 && i === 0) {
            // it is a unit at the beginning of the number, no need to set the unit
            temp += num;
        } else if (num >= 10) {
            if (num > unit) {
                unit = num;
            } else {
                unit *= num;
            }
        } else {
            if (digitOnly && (i != chineseNumber.length - 1)) {
                unit = Math.pow(10, chineseNumber.length - i - 1);
            }
            temp += num * unit;
        }

        if (unit > 10 && unit != 100 && unit != 1000 && unit != 10000 && unit != 100000000) {
            result += temp;
            temp = 0;
            unit = 1;
        }
    }

    return temp;
}

module.exports = { convertChineseNumber };
