import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React, { useState } from 'react'
import Redux2 from './29. Redux2'

const Redux3 = () => {
    const [state, setState] = useState({})

    // 리듀서
    const reducer = (state, action) => {
        const { type, command } = action
        switch (type) {
            case 'INCREASE': {
                return {
                    ...state,
                    command: command,
                }
            }
            default:
                return state
        }
    }

    const store = createStore(reducer, { id: 'hong', name: '홍길동' })
    return (
        <>
            <Provider store={store}>
                리덕스
                <Redux2 />
            </Provider>
        </>
    )
}

export default Redux3
