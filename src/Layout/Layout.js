import React, { Component } from 'react';
import Base from '../Component/index';
import commonCss from '../Jss/common';
import cssData from '../MockData/css';
import jsData from '../MockData/javascript';
import testData from '../MockData/test';
const selectStyle = {
    display: "inline-block",
    width: "120px",
    height: "25px",
    borderRadius: "5px",
    marginRight: "10px"
}
export default class SelfLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: "javascript",
            content: [],  /**保存原始数据 */
            activeRow: 0, /** 当前正在输入的行数*/
            activeWord: 0, /** 当前正在输入的单词下标*/
            inputVelocity: 0, /**速度*/
            inputAccuracy: 0, /** 准确率 */
        };

        this.info = []; /**保存每行输入情况 */
        this.startTime = 0;
        this.restart = {
            clientList: {},
            listen: (key, fn) =>{
                if(!this.restart.clientList[key] || this.restart.clientList[key].length === 0){
                    this.restart.clientList[key]=[]
                };
                this.restart.clientList[key].push(fn)
            },
            trigger:(key, params) => {
                if(this.restart.clientList[key] && this.restart.clientList[key].length !== 0){
                    this.restart.clientList[key].forEach(fn=>fn(params));
                };
            },
            remove: (key, fn)=>{

            }

        }
       
        this.formatData = this.formatData.bind(this);                           // 格式化原始数据      
        this.changeActiveRow = this.changeActiveRow.bind(this);                 // 行数发生改变   
        this.endInput = this.endInput.bind(this);                               // 输入完毕后    
        this.activeWordIndex = this.activeWordIndex.bind(this);                 // 单词下标发生变化
        this.computedInfo = this.computedInfo.bind(this);                       // 计算打字数组及正确率
        this.changeSelect = this.changeSelect.bind(this);
    };
    formatData() {
        let result = [], row = [], len = 0, data = [];
        const { selectValue } = this.state;
        switch (selectValue) {
            case "javascript":
                data = jsData;
                break;
            case "css":
                data = cssData;
                break;
            case "英语打字":
                data = testData;
                break;
            default:
                data = testData;

        }
        data.forEach((word, i) => {
            row.push(word);
            len += (word.text.length + 1);// 单词长度和一个空格
            if (len >= 90) { // 超出一行
                const item = row.pop();  // 取出最后一个
                result.push(row); // 把row放在result里面
                row = [item]; // 取出的放到第二行并初始化row
                len = item.text.length + 1;
            }
        });
        result.push(row)
        this.setState({
            content: result
        }, ()=>{
            this.restart.trigger('restart', "restart")
        });
        console.log(result)
        this.startTime = new Date().getTime();
    }
    changeActiveRow() {
        let { activeRow } = this.state;
        activeRow++;
        this.setState({
            activeRow: activeRow
        })
    }
    activeWordIndex(index) {
        let { activeWord } = this.state;
        if (index !== activeWord) {
            this.setState({
                activeWord: index
            })
        }
    }
    endInput() {
        let {inputVelocity, inputAccuracy} = this.state;
        console.log('end !!!');
        alert( `End---速度：${inputVelocity}---正确率：${inputAccuracy}`)
    }
    computedInfo(info) {
        const { activeRow } = this.state;
        this.info[activeRow] = info;
        let len = 0;
        let errLen = 0;
        this.info.forEach(row => {
            len += row.length;
            errLen += row.filter(i => i).length
        })
        let a = ((errLen / len) * 100).toFixed(2)

        let nowDate = new Date().getTime();
        let times = (nowDate - this.startTime) / 1000 / 60;
        let v = (len / times).toFixed(2)
        this.setState({
            inputAccuracy: isNaN(a) ? 0.00 : a,
            inputVelocity: v
        })

    }

    changeSelect(e) {
        const value = e.target.value;
        this.setState({
            selectValue: value
        })
    }

    render() {
        const { content, activeRow, activeWord, inputAccuracy, inputVelocity, selectValue } = this.state;
        const word = content[activeRow] && content[activeRow][activeWord] && content[activeRow][activeWord];
        const desc = (word && word.desc) || ""
        const url = (word && word.url) || ""
        return (<div className={commonCss.content}>
            <p>
                <select value={selectValue} onChange={this.changeSelect} style={selectStyle}>
                    <option value="javascript">javascript</option>
                    <option value="css">css</option>
                    <option value="英语打字">英语打字</option>
                </select>
                <span className={`${commonCss.button} primary`} onClick={this.formatData}>start</span>
            </p>
            <div style={{ display: content.length > 0 ? "block" : "none", minHeight: "120px" }}>
                <p>正确率：{inputAccuracy}%</p>
                <p>速度：{inputVelocity} code/分</p>
                <br />
                <p style={{ color: "red" }}>{desc}<a href={url} target="_blank">api详情传送门</a></p>
                <br />
                <hr />
            </div>
            <div style={{ height: "600px", overflow: "auto" }}>
                {
                    content.map((row, index) => {
                        return (
                            <Base content={row}
                                restart={this.restart}
                                key={index}
                                row={index}
                                isEnd={index === content.length - 1}
                                activeRow={activeRow}
                                changeActiveRow={this.changeActiveRow}
                                endInput={this.endInput}
                                activeWordIndex={this.activeWordIndex}
                                computedInfo={this.computedInfo} />
                        )
                    })
                }
            </div>

        </div>)
    }
}