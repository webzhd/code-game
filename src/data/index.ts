import test from './test'
import jsArray from './js/js-array'
import css from './css/css'
import jsDate from './js/js-date'
import jsMath from './js/js-math'
import jsNumber from './js/js-number'
import jsObject from './js/js-object'
import jsString from './js/js-string'


function splitRow(data: any[]): any[] {
    let result: any[] = [], row: any[] = [], len = 0;
    data.forEach((word, i) => {
        row.push(word);
        len += (word.text.length + 1);// 单词长度和一个空格
        if (len >= 90) { // 超出一行
            const item = row.pop();  // 取出最后一个
            result.push(row); // 把row放在result里面
            row = [item]; // 取出的放到第二行并初始化row
            len = item.text.length + 1;
        }
    })
    return result
}
function getLength(data: any[]): number {
    return data.reduce((prev, curr) => {
        return prev + curr.text.length + 1
    }, 0)
    
}

export const testData = splitRow(test)

export const jsArrayData = splitRow(jsArray)

export const cssData = splitRow(css)

export const jsDateData = splitRow(jsDate)

export const jsMathData = splitRow(jsMath)

export const jsNumberData = splitRow(jsNumber)

export const jsObjectData = splitRow(jsObject)

export const jsStringData = splitRow(jsString)