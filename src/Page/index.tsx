import React, { useState, useRef, useEffect } from 'react';
import Coder, { CoderMethots } from '../Components/Coder';
// import produce from 'immer'
import { 
    jsAllData,
    jsStringData, 
    jsArrayData, 
    jsDateData, 
    jsMathData, 
    jsNumberData, 
    jsObjectData, 
    jsMapSetData,
    jsPromiseData,
    jsGlobalData
} from '../data'
import styles from './index.less'

export default function Index() {
    
    const [select, setSelect] = useState('1')
    const [speed, setSpeed] = useState('') 
    const [correct, setCorrect] = useState('')
    const [codeData, setCodeData] = useState(jsArrayData)
    const [coderKey, updateCoderKey] = useState('')
    const [isStart, setIsStart] = useState(false)
    const codeRef = useRef<CoderMethots>(null)


    useEffect(() => {
        if(coderKey && isStart) {
            const coder = codeRef.current
            if(coder) {
                coder.start()
            }
        }
    }, [coderKey, isStart])

    function changeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value
        updateCoderKey(Math.random() + '' + new Date().getTime())
        setIsStart(false)
        setSelect(value)
        switch (value) {
        case '0':
            setCodeData(jsAllData)
            break;
        case '1':
            setCodeData(jsArrayData)
            break;
        case '2':
            setCodeData(jsDateData)
            break;
        case '3':
            setCodeData(jsMathData)
            break;
        case '4':
            setCodeData(jsNumberData)
            break;
        case '5':
            setCodeData(jsObjectData)
            break;
        case '6':
            setCodeData(jsStringData)
            break;
        case '7':
            setCodeData(jsMapSetData)
            break;
        case '8':
            setCodeData(jsPromiseData)
            break;
        case '8':
            setCodeData(jsGlobalData)
            break;
        default :
            setCodeData(jsArrayData)
        }
    }

    function start() {
        updateCoderKey(Math.random() + '' + new Date().getTime())
        setIsStart(true)
    }
    function restart() {
        updateCoderKey(Math.random() + '' + new Date().getTime())
        setIsStart(true)
    }

    function end(speed: string, correct: string) {
        setSpeed(speed)
        setCorrect(correct)
    }
    return (<>
        <div>
            <select className="select" value={select} onChange={changeSelect}>
                
                <option value="1">js Array</option>
                <option value="2">js Date</option>
                <option value="3">js Math</option>
                <option value="4">js Number</option>
                <option value="5">js Object</option>
                <option value="6">js String</option>
                <option value="7">js Map Set</option>
                <option value="8">js Promise</option>
                <option value="9">js 全局函数</option>
                <option value="0">js all</option>
            </select>

            <button className="button ml-sm" onClick={start}>开始</button>

            <button className="button ml-sm" onClick={restart}>重新开始</button>
        </div>

        <div className={styles.result}>
            {speed && correct && <p><span>速度：{speed}</span> &nbsp; &nbsp;<span>正确率：{correct}</span></p>}
        </div>

        <Coder key={coderKey} ref={codeRef} code={codeData} end={end}/>
    </>)
}