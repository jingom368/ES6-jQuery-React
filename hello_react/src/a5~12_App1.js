import Greet from './1. Greet'
import { Fragment, useState } from 'react'
import Counter from './9. UseState - Counter'
import Event3 from './5. Event3'
import Event4 from './6. Event4'
import Event5 from './7. Event5'
import Hooks1 from './8. UseState - Hooks1'
import Hooks2 from './10. UseEffect - Hooks2'
import Counter2 from './11. UseReducer - Counter2'
import Hooks3 from './12. UseMemo, UseCallback, UseRef- Hooks3'
// import UseMemoTest from './useMemoTest'

function App1() {
    // const name = 'React'
    // const greet = false
    // const style = {
    //     backgroundColor: 'black',
    //     color: 'white',
    // }
    // const numbers = [1, 2, 3, 4]
    // let Greets = []
    // for (let i = 0; i < numbers.length; i++) {
    //     Greets[i] = (
    //         <li key={i}>
    //             <Greet />
    //         </li>
    //     )
    //     function callbackfn(asd, i) {
    //         console.log(asd, i)
    //     }
    //     let Greets2 = numbers.map(callbackfn)
    // }

    const [nickname, setNickname] = useState('별명')
    return (
        <>
            <Counter nickname={nickname} setNickname={setNickname} />
            {/* <Event1 /> */}
            <Event3 />
            <Event4 />
            <Event5 />
            <Hooks1 />
            {/* <Hooks2 /> */}
            <Counter2 />
            <Hooks3 />
        </>

        // <h1>{Greets}</h1>

        /*        
        <Fragment>
            <h1 style={style}>hello {name}</h1>
            <h1
                style={{
                    backgroundColor: 'yellow',
                    color: 'red',
                }}
            >
                안녕하세요
            </h1>
            {greet === false ? <h3>안녕</h3> : null}
        </Fragment>
        */
    )
}

export default App1
