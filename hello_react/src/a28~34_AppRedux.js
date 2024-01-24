import Redux1 from './28. Redux1'
import Depth1 from './32. Depth1'
// import Redux2 from './29. Redux2'
// import Redux3 from './30. Redux3'
import './31. AppRedux.css'
import { useState } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const AppRedux = () => {
    // const [number, setNumber] = useState(3)
    // const increase = () => {
    //     setNumber(number + 1)
    // }
    // 스토어 생성시 반드시 리듀서 함수를 주입
    function reducer(state, action) {
        if (state === undefined) {
            return { number: 1 }
        }
        //불변성
        const state2 = { ...state }
        if (action.type === 'INCREASE') {
            state2.number++
        }
        return state2
    }

    // 스토어 생성
    const store = createStore(reducer)
    return (
        <>
            <h1>AppRedux</h1>
            <Provider store={store}>
                <Depth1 />
            </Provider>
            <Redux1 />
            {/* <Redux2 />
                <Redux3 /> */}
        </>
    )
}
export default AppRedux
