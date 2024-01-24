import { useCallback, useMemo, useState } from 'react'

const UseCallbackTest = () => {
    const [number, setNumber] = useState(0)

    // const increase = () => {
    //     setNumber(number + 1)
    // }
    const increase = useCallback(() => {
        setNumber((num) => num + 1) // 0이 캐시되어 있기에 0+1만 하는 것임
    }, [])

    return (
        <>
            <div>{number}</div>
            <div>
                <button onClick={increase}>증가</button>
            </div>
        </>
    )
}

export default UseCallbackTest
