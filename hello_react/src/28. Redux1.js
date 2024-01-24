import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React, { useState } from 'react'

const Redux1 = () => {
    const [state, setState] = useState({})
    const store = createStore((state) => state, { id: 'hong', name: '홍길동' })
    return (
        <>
            <Provider store={store}>리덕스</Provider>
        </>
    )
}
export default Redux1
