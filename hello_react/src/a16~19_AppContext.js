import ContextConsumer from './17. ContextConsumer'
import ContextConsumer2 from './18. contextConsumer2'
import ContextConsumer3 from './19. ContextConsumer3'
import Context1 from './16. Context1'
import { useState } from 'react'

const AppContext = () => {
    const [value, setValue] = useState({ name: '이순신' })
    return (
        <>
            <ContextConsumer />
            <Context1.Provider value={value}>
                <ContextConsumer />
                <ContextConsumer2 />
                <ContextConsumer3 />
            </Context1.Provider>
            <ContextConsumer />
            <button onClick={() => setValue({ name: '홍길동' })}>홍길동</button>
            <button onClick={() => setValue({ name: '김유신' })}>김유신</button>
        </>
    )
}

export default AppContext
