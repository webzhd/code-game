import React,{ Component } from "react";
import Css from './css';
export default class Base extends Component {
      constructor(props){
          super(props);
          this.state = {
            readonly: false, /* 是否可读 */
            cValue: "",/** input值 */
            len: this.props.content.map(word=>word.text).join(" "),
            isError: [] /**保存对应下标位置的字符是否正确 */
          };
          this.textInput = React.createRef();
         
          this.isError = []

          this.focusTextInput = this.focusTextInput.bind(this);
          this.blurTextInput = this.blurTextInput.bind(this);
      }

      componentDidMount() {
        if(this.props.activeRow === this.props.row){
          this.focusTextInput();
        }
        this.props.restart.listen('restart', (params)=>{
          console.log(this, params)
        })
      }
      componentWillReceiveProps(nextProps) {
        if(nextProps.activeRow === this.props.row){
          this.focusTextInput();
        }
      }
      focusTextInput() {
        this.textInput.current.focus();
      }
      blurTextInput() {
        this.textInput.current.blur();
        this.props.changeActiveRow();
        this.setState({
          readonly: true
        });
        if(this.props.isEnd){
            this.props.endInput();
        }
      }

      changeValue = (e) => {
        const value = e.target.value;
        const {len, isError} = this.state;
        const vLen = value.length;
        const lLen = len.length;
        isError[value.length-1] = value.charAt(vLen-1) === len.charAt(vLen-1);
        const newError = isError.slice(0, vLen);
        this.props.computedInfo(newError)
        if(vLen === lLen){
          this.blurTextInput();
        }
        this.setState({
            cValue: value,
            isError: newError
        })  
      }

      render () {
        const {content, success, error} = Css;
        const {cValue, readonly} = this.state
        let codeNumber = 0;
        return <div>
          <p className={content}>
            {this.props.content.map((world, i)=>{
              if(codeNumber === cValue.length-1){ // 当前字符所在的位置的i的值
                this.props.activeWordIndex(i);
              }
              const result = (<span key={i}>
                  {[...world.text, " "].map((s, j)=> {
                      const targetCode = cValue.charAt(codeNumber);
                      const span = (<span className={targetCode ? targetCode === s?success:error : ""} key={`${i}-${j}`}>{s}</span>)
                      codeNumber ++;
                      return span
                  })}
              </span>)
              return result;
            })}
          </p>
          <input className={content}
              readOnly={readonly}
              ref={this.textInput}
              value={cValue} 
              onChange={this.changeValue} 
              onKeyUp={this.endInput}/>
        </div>
      }
}
