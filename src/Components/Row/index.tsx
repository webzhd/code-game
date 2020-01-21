import React, { useState, useRef, useImperativeHandle } from 'react'
import styles from './index.less'

export interface ItemType {
    text: string,
    desc: string,
    url?: string
}
export interface RowProps {
    rowIndex: number,
    textArray: ItemType[],
    next: () => void,
    prev: () => void,
}

export interface RowRefMethods {
    blur: () => void
    focus: () => void
    setIsRead: (bl: boolean) => void
}

function Row(props: RowProps, ref: React.Ref<RowRefMethods>) {
    let coderNumber = -1
    const {textArray} = props
    const [targetCode, setTargetCode] = useState('')
    const [isReadOnly, setIsReadOnly] = useState(true)
    const [itemWord, setItem] = useState<ItemType>()

    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => {
        return {
            blur: blur,
            focus: focus,
            setIsRead: setIsRead
        }
    })
    function blur() {
        const input = inputRef.current
        if(input) {
            input.blur()
        }
    }
    function focus() {
        const input = inputRef.current
        if(input) {
            input.focus()
        }
    }

    function setIsRead(bl: boolean) {
        setIsReadOnly(bl)
    }
    
    function changeInputValue(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        
        if(value.length >= coderNumber) {
            blur()
            props.next()
        }
        if(value === '' && targetCode !== '') {
            console.log('row delete')
            blur()
            props.prev()
        }
        if(value.length > coderNumber) return
        setTargetCode(value)
    }

    function getClassName(code: string, index: number): string {
        const valueIndex = targetCode.length - 1
        if(index > valueIndex) {
            return 'code-atom'
        }
        if(code === targetCode[index]) {
            return `${styles.success} code-success code-atom`
        }else{
            return `${styles.error} code-error code-atom`
        }
    }

    function changeDesc(item: ItemType) {
        // 
        if(itemWord !== item) {
            setItem(item)
        }
    }

    return (<div className={styles.box}>
        <p className={styles['content-row']}>
            {
                textArray.map((item: ItemType) => {
                    if(coderNumber === targetCode.length - 1 && !isReadOnly) {
                        // 进入下一个单词的边界，更新单词描述
                        changeDesc(item)
                    }
                    return [...item.text, ' '].map((code: string) => {
                        coderNumber = coderNumber + 1
                        return <span key={`${coderNumber}`} data-i={coderNumber} className={getClassName(code, coderNumber)}>{code}</span>
                    })
                })
            }
        </p>

        <input readOnly={isReadOnly} ref={inputRef} onChange={changeInputValue} className={styles['content-row']} type="text"/>
        
        {itemWord && !isReadOnly && <div className={styles.desc}>
            <p><a href={itemWord.url}>[查看详情]</a>{itemWord.desc}</p>
        </div>}
    </div>)
}

export default React.forwardRef<RowRefMethods, RowProps>(Row)