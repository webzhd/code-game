import React, {Component} from 'react';
import Base from '../Component/index';
import commonCss from '../Jss/common';
import cssData from '../MockData/css'
export default class SelfLayout extends Component {
    constructor (props){
        super(props);
        this.state = {
            content: [],  /**保存原始数据 */                                                      
            activeRow: 0, /** 当前正在输入的行数*/                                                     
            activeWord: 0, /** 当前正在输入的单词下标*/                                                     
            inputVelocity:0, /**速度*/
            inputAccuracy: 0, /** 准确率 */
        };

        this.info= []; /**保存每行输入情况 */
        this.startTime = 0;
       
        this.formatData = this.formatData.bind(this);                           // 格式化原始数据      
        this.changeActiveRow = this.changeActiveRow.bind(this);                 // 行数发生改变   
        this.endInput = this.endInput.bind(this);                               // 输入完毕后    
        this.activeWordIndex = this.activeWordIndex.bind(this);                 // 单词下标发生变化
        this.computedInfo = this.computedInfo.bind(this);                       // 计算打字数组及正确率
    };
    formatData(){
        let result = [], row = [], len = 0;
        cssData.forEach((word, i)=>{
            row.push(word);
            len += word.text.length;
            if(len >= 80){
                const item = row.pop();
                result.push(row);
                row = [item];
                len = item.text.length;
            }
        });
        result.push(row)
        this.setState({
            content: result
        });
        console.log(result)
        this.startTime = new Date().getTime();
    }
    changeActiveRow(){
        let {activeRow} = this.state;
        activeRow ++;
        this.setState({
            activeRow: activeRow
        })
    }
    activeWordIndex(index){
        let {activeWord} = this.state;
        if(index !== activeWord){  
            this.setState({
                activeWord: index
            })
        }
    }
    endInput(){
        console.log('end !!!');
    }
    computedInfo(info){
        const {activeRow} = this.state;
        this.info[activeRow] = info;
        let len = 0;
        let errLen = 0;
        this.info.forEach(row=>{
            len += row.length;
            errLen += row.filter(i=>i).length
        })
        let a = ((errLen/len)*100).toFixed(2)

        let nowDate = new Date().getTime();
        let times = (nowDate - this.startTime)/1000/60;
        let v = (len/times).toFixed(2)
        this.setState({
            inputAccuracy: isNaN(a)? 0.00: a,
            inputVelocity: v
        })

    }
    render (){
        const {content, activeRow, activeWord, inputAccuracy, inputVelocity} = this.state;
        const desc = content[activeRow] &&  content[activeRow][activeWord] && content[activeRow][activeWord].desc
        return (<div className={commonCss.content}>
                <p>
                    <span className={`${commonCss.button} primary`} onClick={this.formatData}>start</span>
                </p>
                <div>
                    <p>{desc}</p>
                    <p>正确率：{inputAccuracy}%</p>
                    <p>速度：{inputVelocity} code/分</p>
                </div>
                {
                    content.map((row, index)=>{
                        return (
                            <Base content={row}
                             key={index} 
                             row={index} 
                             isEnd={index === content.length-1}
                             activeRow={activeRow}
                             changeActiveRow={this.changeActiveRow}
                             endInput={this.endInput}
                             activeWordIndex={this.activeWordIndex} 
                             computedInfo={this.computedInfo} />
                        )
                    })
                }
            </div>)
    }
}