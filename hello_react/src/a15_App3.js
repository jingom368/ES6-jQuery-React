import BoardList from './15. Boardlist'
import { useCallback, useState } from 'react'

const select = () => {
    const arr = []
    for (let i = 0; i < 3000; i++) {
        arr.push({ no: 1 + i, title: '제목' + i, checked: false })
    }
    return arr
}

// prettier-ignore
const App3 = () => {
    const [boards, setBoards] = useState(select) // 값이 들어갈 수도 있고 함수가 들어갈 수도 있다.
    const changeChecked = useCallback( (no) => {
        const boards2 = (boards) => // 이건 함수구나 --> 함수가 usecallback으로 재 실행됌. 함수 안에 state를 저장되어있는 것이 아닌 함수 안에 함수 함수가 있을 뿐.
            boards.map((board) =>
                board.no === no ? { ...board, checked: !board.checked } : board,
            )
        // const boards2 = boards.map((board) => // 이건 배열이구나 --> 문제가 생김. --> 3000개 false된 것 자체가 캐시되어있음 -> 함수가 통째로 캐시되면서 3000개 배열로 캐시되버림.
        // // --> useCallback 안에 state가 있으면 state 자체를 캐시해버림
        //     board.no === no ? { ...board, checked: !board.checked } : board,
        // )
        console.log(boards2)
        setBoards(boards2) // 여기서 boards라는 state를 넣어줌으로써 setBoards에 들어 있는 함수가 실행됌 => 그럼으로써 board2 함수가 실행됌 ->  
    }, []) 

    // 함수가 안에 들어있으면 state의 상태를 바꾸고 state를 바꾸는 게 아니야!! 함수를 넣는거야!  
    
    // const changeChecked = (no) => {
    //     // const boards2 = (boards) => // 이건 함수구나 --> 함수가 usecallback으로 재 실행됌. 함수 안에 state를 저장되어있는 것이 아닌 함수 안에 함수 함수가 있을 뿐.
    //     //     boards.map((board) =>
    //     //         board.no === no ? { ...board, checked: !board.checked } : board,
    //     //     )
    //     const boards2 = boards.map((board) => // 이건 배열이구나 --> 문제가 생김. --> 3000개 false된 것 자체가 캐시되어있음 -> 함수가 통째로 캐시되면서 3000개 배열로 캐시되버림.
    //     // --> useCallback 안에 state가 있으면 state 자체를 캐시해버림
    //         board.no === no ? { ...board, checked: !board.checked } : board,
    //     )
    //     console.log(boards2)
    //     setBoards(boards2) // 여기서 boards라는 state를 넣어줌으로써 setBoards에 들어 있는 함수가 실행됌 => 그럼으로써 board2 함수가 실행됌 ->  
    // }
    return (
        <>
            {boards.map((board, i) => (
                <BoardList
                    key={i}
                    board={board}
                    changeChecked={changeChecked}
                />
            ))}
        </>
    )
}

export default App3

// React.Memo
// UseCallback 캐시
