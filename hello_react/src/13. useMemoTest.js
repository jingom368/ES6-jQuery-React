import { useMemo, useRef, useState } from 'react'

const UseMemoTest = (props) => {
    const [number, setNumber] = useState(0) // 초기화
    const [number2, setNumber2] = useState(0) // 초기화
    const [name, setName] = useState('') // 초기화
    const inputName = useRef(null)
    const increase = () => {
        setName('김길동')
        setNumber(number + 1)
        console.log(number + 1)
    }
    const increase2 = () => {
        setNumber(number + 1)
        setNumber2(number2 + 1)
        console.log(number + 1)
        console.log(number2 + 1)
    }
    const decrease = () => {
        setNumber(number - 1)
        console.log(number)
    }
    // const updateNickname = () => {
    //     props.setNickname('헬로우')
    // }

    const val = useMemo(() => {
        console.log('렌더링됨' + new Date())
        return number * number2
    }, [number])
    // const val = number * number
    // console.log('렌더링됨' + new Date())
    return (
        <>
            <div>
                <button onClick={increase}>증가</button>
                <button onClick={decrease}>감소</button>
                <button onClick={increase2}>증가2</button>
                <input type="text" ref={inputName} />
                <button onClick={() => setName(inputName.current.value)}>
                    이름 변경
                </button>
            </div>
            <div>
                {number}, {name}, {val}
            </div>
        </>
    )
}

export default UseMemoTest
