import React, { useState } from 'react'

const Counter = (props) => {
    const [number, setNumber] = useState(0) // 초기화
    const [name, setName] = useState('홍길동') // 초기화
    const increase = () => {
        setName('김길동')
        setNumber(number + 1)
    }
    const decrease = () => {
        setNumber(number - 1)
    }
    const updateNickname = () => {
        props.setNickname('헬로우')
    }
    return (
        <>
            <div>
                <button onClick={increase}>증가</button>
                <button onClick={decrease}>감소</button>
                <button onClick={updateNickname}>별명변경</button>
            </div>
            <div>
                {number}, {name}, {props.nickname}
            </div>
        </>
    )
}
export default Counter
