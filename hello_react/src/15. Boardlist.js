import React from 'react'
import { useCallback } from 'react'

const BoardList = ({ board, changeChecked }) => {
    const { no, title, checked } = board
    return (
        <>
            <div>
                <input
                    type="checkbox"
                    checked={checked ? 'checked' : ''}
                    // onChange={changeChecked(no)} // 바로 함수가 실행 됨.. 처음에 로드될 때 -> 함수를 실행하는 표현식
                    onChange={() => changeChecked(no)} // pk를 넘겨주는 것과 같음 / 값을 바꿔줬는 지 체크하려면
                />
                {no} {title}
            </div>
        </>
    )
}
export default React.memo(BoardList) // memorization
// export default BoardList

// 대부분 이런 form
