import React, { useEffect, useState, useImperativeHandle } from 'react'
import Row, { RowRefMethods, ItemType } from '../Row'
import styles from './index.less'

export interface CoderType {
    code: any[],
    end: (speed: string, correct: string) => void
}
export interface CoderMethots {
    start: () => void
}

let startTime: number
let endTime: number


function Coder (props: CoderType, ref: React.Ref<CoderMethots>) {
    const { code } = props

    const refs: React.RefObject<RowRefMethods>[]= []


    useImperativeHandle(ref, () => {
        return {
            start: () => {
                start()
            }
        }
    })

    useEffect(() => {
        refs.forEach(ref => {
            const input = ref.current
            if(input) {
                input.setIsRead(true)
            }
        })
    }, [code])
 
    /**
     * @param index 
     * 把当前行设置为只读，下一行设置为可读，并设置焦点
     */
    function next(index: number) {
        const nextInput = refs[index + 1]
        const currInput = refs[index]
        if(currInput) {
            currInput.current!.setIsRead(true)
        }
        if(nextInput) {
            nextInput.current!.setIsRead(false)
            nextInput.current!.focus()
        }else {
            // end
            end()
        }
    }
    function prev(index: number) {
        const nextInput = refs[index - 1]
        if(nextInput) {
            nextInput.current!.setIsRead(false)
            nextInput.current!.focus()
        }else {
            const currInput = refs[index]
            if(currInput) {
                currInput.current!.setIsRead(false)
                currInput.current!.focus()
            }
        }
    }

    function start() {
        console.log('start')
        next(-1)
        startTime = new Date().getTime()
    }
    function end() {
        endTime = new Date().getTime()
        let all = document.querySelectorAll('.code-atom').length
        let errorLength = document.querySelectorAll('.code-error').length
        props.end(all / ((endTime - startTime) / 1000) * 60 + 'code / min', (1 - errorLength / all) * 100 + '%')
    }

    return (
        <div>
            {
                code.map((row: ItemType[], index) => {
                    refs[index] = React.createRef()
                    return <Row 
                        ref={refs[index]} 
                        textArray={row} key={index} 
                        rowIndex={index}
                        prev={prev.bind(null, index)}
                        next={next.bind(null, index)}/>
                })
            }
        </div>
    )
}

export default React.forwardRef(Coder)