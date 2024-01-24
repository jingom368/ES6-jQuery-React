import { useReducer } from 'react'

const Counter2 = () => {
    function reducer(number, action) {
        if (action.type === 'INCREASE') {
            return { value: number.value + 1 }
        } else if (action.type === 'DECREASE') {
            return { value: number.value - 1 }
        } else {
            return number
        }
    }

    const [number, dispatch] = useReducer(reducer, { value: 0 })

    return (
        <>
            <div>
                {number.value}
                <button onClick={() => dispatch({ type: 'INCREASE' })}>
                    +1
                </button>
                <button onClick={() => dispatch({ type: 'DECREASE' })}>
                    -1
                </button>
            </div>
        </>
    )
}

export default Counter2
