import { useState, useMemo, useCallback, useRef } from 'react'

const Hook3 = () => {
    let btn = useRef(null)
    const click = () => {
        console.log('btn : ', btn)
        btn.current.click()
    }

    const [list, setList] = useState([])
    const [number, setNumber] = useState([])

    const onChange = (e) => {
        setNumber(e.target.value)
    }
    const insert = (e) => {
        console.log(document.querySelector('#number').value)
        setList([...list, parseInt(number)])
    }

    // const insert = useCallback(
    //     (e) => {
    //         console.log(document.querySelector('#number').value)
    //         setList([...list, parseInt(number)])
    //     },
    //     [list, number],
    // )
    const sum = (list) => {
        console.log('합계 계산')
        let sum = 0
        list.forEach((element) => {
            sum += element
        })
        return sum
    }

    // const s = useMemo(() => sum(list), [list])

    return (
        <>
            <input type="text" value={number} id="number" onChange={onChange} />
            <button onClick={insert} ref={btn}>
                등록
            </button>
            <button onClick={click}>새로운버튼</button>
            <ul>
                {list.map((v, idx) => (
                    <li key={idx}>{v}</li>
                ))}
            </ul>
            <div>합계:{sum(list)}</div>
        </>
    )
}
export default Hook3

// ---------- GPT 4.0 ---------- //

// Q.1 export default Hook3
//      친구야 이거 왜 값을 입력할때마다
//      console.log('합계 계산')
//      이게 뜨는 거야?

/*
'합계 계산'이 출력되는 이유는 sum(list) 함수가 컴포넌트가 리렌더링될 때마다 호출되기 때문입니다.

코드를 보면, onChange 함수가 호출될 때마다 setNumber 함수를 실행하여 number 상태를 변경하고 있습니다. 
    setNumber 함수가 호출되면 상태가 변경되고, 이로 인해 컴포넌트가 리렌더링됩니다.

리렌더링 시, return 문 내부의 JSX가 다시 평가되어 화면에 그려지게 됩니다. 
    여기서 sum(list) 함수가 호출되어 '합계 계산'이 출력되고, 합계가 계산됩니다.

따라서 입력이 바뀔 때마다 컴포넌트가 리렌더링되고, 
    이 때마다 sum(list) 함수가 호출되어 '합계 계산'이 출력되는 것입니다.

이를 해결하기 위해선 useMemo를 사용하여 list 상태가 변경될 때만 합계를 계산하도록 설정할 수 있습니다. 
    아래의 코드처럼 수정해보세요.

const s = useMemo(() => sum(list), [list])

<div>합계:{s}</div>
이렇게 수정하면 list 상태가 변경될 때만 sum(list) 함수가 호출되어 합계를 계산하며 '합계 계산'이 출력됩니다. 
    그 외의 경우에는 이전에 계산된 합계가 재사용되므로 '합계 계산'이 출력되지 않습니다.
*/

// Q.2 컴포넌트가 리렌더링된다는 뜻이 아래 코드 전체가 다시 실행된다는 걸 의미하는 거지?

/*
"컴포넌트가 리렌더링된다"는 의미는 React 컴포넌트의 return 부분(렌더링 부분)이 다시 실행되어 화면을 갱신한다는 것을 의미합니다.

상태(state)가 변경되면, React는 해당 컴포넌트를 다시 렌더링합니다. 이때, 컴포넌트 함수의 내용이 모두 다시 실행되는 것이 아니라 
    return 문이 포함하는 JSX 부분이 다시 평가되고, 이에 따라 화면이 갱신됩니다.

그래서 위의 코드에서 number 상태가 바뀔 때마다 onChange 함수가 호출되고, 이로 인해 컴포넌트가 리렌더링 되는 것입니다. 
    이 때 return 문에 포함된 JSX가 다시 평가되어 화면이 갱신되며, 이 과정에서 sum(list) 함수가 호출되어 '합계 계산'이 출력되는 것입니다.

그러나 이러한 리렌더링 과정에서는 상위 스코프의 변수나 함수(예: btn, click, insert, sum 등)가 다시 선언되거나 초기화되지는 않습니다. 
    이들은 컴포넌트가 처음 마운트될 때 한 번만 선언되거나 초기화되며, 이후에는 상태 변경에 따른 리렌더링에서는 재사용됩니다.

다만, useState, useEffect, useMemo 등의 훅이 포함된 코드는 상태 변경에 따라 해당 훅의 동작에 따라 다시 실행될 수 있습니다. 
    예를 들어 useState의 업데이트 함수(setNumber, setList)가 호출되면 해당 상태가 갱신되고, 이에 따라 컴포넌트가 리렌더링됩니다. 
    useEffect는 의존성 배열의 요소가 변경될 때마다 실행되며, useMemo는 의존성 배열의 요소가 변경될 때마다 메모이즈된 값을 다시 계산합니다.
*/

// Q.3 export default UseMemoTest
// 너가 return 부분만 렌더링 된다고 했는데 왜 감소 버튼을 클릭하면 console.log('렌더링됨') 이게 뜨는거야?
// 이건 return 부분에 안 들어 있잖아..

/*
제가 설명을 명확하게 하지 못한 것 같아 죄송합니다. "리렌더링"이라는 용어는 React 컴포넌트의 return 부분만을 가리키는 것이 아니라, 
    상태가 변경될 때 전체 컴포넌트 함수가 다시 호출되는 것을 의미합니다.

따라서 상태가 변경되면 (즉, setNumber나 setName 같은 상태 변경 함수가 호출되면), 전체 컴포넌트 함수가 다시 실행됩니다. 
    이 때 return 부분뿐만 아니라 return 이전의 부분도 포함해서 모두 다시 실행되며, 이 과정에서 console.log('렌더링됨') 등의 코드도 다시 실행됩니다.

즉, "감소" 버튼을 클릭하면 decrease 함수가 실행되고, setNumber 함수가 호출되어 number 상태가 변경됩니다. 이로 인해 컴포넌트 함수가 다시 실행되고, 
    이 때 console.log('렌더링됨') 코드가 다시 실행되어 '렌더링됨'이 출력되는 것입니다.

다시 말해, "리렌더링"은 컴포넌트의 상태가 변경될 때 전체 컴포넌트 함수가 다시 실행되는 것을 의미하며, 이 때 return 부분뿐만 아니라 return 이전의 모든 부분도 다시 실행됩니다.

이러한 동작은 React의 특징 중 하나로, 상태가 변경될 때마다 새로운 컴포넌트 함수가 생성되고, 이 함수 내에서 상태와 연관된 모든 계산과 처리가 다시 이루어지게 됩니다. 
    이는 상태 변경에 따른 결과를 항상 일관되게 유지하고, 에러 없이 예상대로 동작하게 하는 데 중요한 역할을 합니다.
*/

// Q4. 그럼 리렌더링 되면  상위 스코프의 변수나 함수도 다시 선언되거나 초기화 되는거야?

/*
네, 맞습니다. React 컴포넌트의 상태가 변경되면, 해당 컴포넌트 함수 전체가 다시 실행됩니다. 이 때, 컴포넌트 함수 내부의 모든 변수와 함수는 매번 새롭게 선언되고 초기화됩니다.

이는 JavaScript의 함수 스코프 규칙과 React의 상태 관리 방식 때문입니다. JavaScript에서 함수를 호출하면, 
    해당 함수 내부의 모든 변수와 함수는 새롭게 생성되며, 함수 호출이 종료되면 이들은 메모리에서 제거됩니다. React 컴포넌트도 이와 같은 방식으로 동작합니다.

그래서 React 컴포넌트의 상태가 변경될 때마다, 해당 컴포넌트 함수는 다시 호출되고 이 때 함수 내부의 모든 변수와 함수는 새롭게 생성됩니다. 
    이는 상태 변경에 따른 결과를 항상 일관되게 유지하고, 에러 없이 예상대로 동작하게 하는 데 중요한 역할을 합니다.

다만, 이러한 동작 방식 때문에 매번 새롭게 생성되는 함수나 객체를 이벤트 핸들러 등에 직접 전달하면, 이러한 값들의 변경으로 인해 불필요한 리렌더링이 발생할 수 있습니다. 
    이를 방지하려면 useCallback이나 useMemo 같은 훅을 사용하여 필요할 때만 새롭게 생성하도록 설정할 수 있습니다.
*/
