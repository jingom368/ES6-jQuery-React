import { useState } from 'react'
import { useEffect } from 'react'

const Hooks2 = () => {
    const [today, setToday] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            const newToday = { ...today, today: new Date() }
            setToday(new Date())
            console.log(newToday.today)
        }, 1000)
    }, [])
    return (
        <>
            <div>{today.toString()}</div>
        </>
    )
}
export default Hooks2

// ---------- GPT 4.0 ---------- //

// <div>{today.toString()}</div> </> ) } export default Hooks2
// 위에는 console.log(today)이 안바뀌는데 왜 아래는 바뀌는거야?.....

/*
아, 제가 이해했습니다. 고쳐진 두 번째 코드에서는 newToday.today라는 새로운 객체를 만들어서 그것을 출력하고 있으니까, 새로운 날짜가 계속 출력되는 것이군요.

그러나 첫번째 코드에서는 setInterval이 선언되는 시점의 today 상태를 계속 참조하고 있습니다. 이것이 클로저(closure)의 특성입니다. 
    그래서 setToday(new Date())를 통해 today를 업데이트해도, console.log(today)는 업데이트 되기 이전의 today 상태를 계속 참조하게 되는 것입니다.

이 문제를 해결하려면 useEffect의 의존성 배열에 today를 포함시키는 방법이 있습니다. 이렇게 하면 today 상태가 변경될 때마다 useEffect가 다시 실행되고, 
    그에 따라 setInterval도 새롭게 설정되어 최신의 today 상태를 참조하게 됩니다.

하지만 이 방법은 setInterval이 1초마다 실행되는 것을 방해할 수 있습니다. 왜냐하면 today 상태가 변경될 때마다 useEffect가 다시 실행되어 setInterval이 새롭게 설정되기 때문입니다.

따라서 이 문제를 해결하는 가장 좋은 방법은 setInterval 콜백 함수 내에서 setToday 함수를 사용하여 상태를 바로 업데이트하고, console.log로 바로 그 값을 출력하는 것입니다. 
    이렇게 하면 console.log는 항상 최신의 today 상태를 출력하게 됩니다.
*/

// Q. 하지만 이 방법은 setInterval이 1초마다 실행되는 것을 방해할 수 있습니다 이거 이유가 뭐야?

/*
"setInterval이 1초마다 실행되는 것을 방해할 수 있습니다."라는 문장은 useEffect의 의존성 배열에 'today'를 포함시키는 경우를 가리키는 것입니다.

useEffect의 의존성 배열에 'today'를 포함시키면, 'today' 상태가 바뀔 때마다 useEffect가 다시 실행됩니다. 
    그런데 'today' 상태는 setInterval에 의해 매 초마다 바뀌고 있습니다. 그래서 매 초마다 useEffect가 다시 실행되게 됩니다.

즉, 매 초마다 이전에 설정된 setInterval이 해제되고 새로운 setInterval이 설정되는 것이죠. 이는 우리가 원하는 "1초마다 특정 작업을 수행하는" setInterval의 동작을 방해할 수 있습니다.

또한 이러한 방식은 불필요하게 많은 setInterval을 생성하고 해제하는 과정으로 인해 성능에 부담을 줄 수도 있습니다.

따라서, 이 문제를 해결하기 위해 useEffect 내부에서 setInterval을 설정할 때, 클로저에 의한 문제를 피하고 항상 최신의 상태를 참조하도록 코드를 작성하는 것이 중요합니다. 
    이는 위에서 제시한 코드 예제와 같이 setInterval 콜백 내부에서 상태를 직접 업데이트하고 그 값을 바로 출력하는 방식으로 구현할 수 있습니다.
*/

/*
import { useState } from 'react'
import { useEffect } from 'react'

const Hooks2 = () => {
    const [today, setToday] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setToday(new Date())
            console.log(today)
        }, 1000)
    }, [])
    return (
        <>
            <div>{today.toString()}</div>
        </>
    )
}
export default Hooks2
*/

/*
제공해주신 코드를 보면 React의 useEffect 훅 안에서 setInterval 함수를 사용하여 매 초마다 today 상태를 업데이트하고, 그 값을 콘솔에 출력하고 있습니다.

그런데 한 번에 두 번씩 출력되는 이유는 useEffect 훅이 컴포넌트가 렌더링될 때마다 실행되기 때문입니다. 
    이는 컴포넌트가 처음 마운트될 때, 그리고 컴포넌트가 업데이트될 때마다 실행되는 것을 의미합니다.

setInterval 함수는 매 초마다 setToday 함수를 호출하여 today 상태를 업데이트합니다. 이 today 상태의 변경은 컴포넌트의 재렌더링을 유발합니다. 
    그래서 useEffect 훅이 다시 실행되고, 이로 인해 새로운 setInterval 함수가 생성되어서 콘솔에 또 다시 값을 출력하게 되는 것입니다.

이 문제를 해결하려면 useEffect 훅의 clean-up 함수를 사용하여 이전에 생성된 setInterval을 해제하는 것이 필요합니다. 
    이렇게 하면 컴포넌트가 업데이트될 때마다 새로운 setInterval을 생성하기 전에 이전의 setInterval을 제거할 수 있습니다.

다음은 코드의 예입니다:

import { useState, useEffect } from 'react'

const Hooks2 = () => {
    const [today, setToday] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            const newToday = new Date()
            setToday(newToday)
            console.log(newToday)
        }, 1000)
        
        // Clean-up function to clear the interval
        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <div>{today.toString()}</div>
        </>
    )
}

export default Hooks2
위의 코드에서는 useEffect 훅 내에서 setInterval 함수를 실행하고, 그 결과로 반환되는 interval ID를 intervalId 변수에 저장하고 있습니다. 
    그리고 useEffect의 clean-up 함수에서는 clearInterval 함수를 사용하여 이 interval을 해제하고 있습니다. 
    이렇게 하면 컴포넌트가 업데이트될 때마다 이전 setInterval 함수가 제거되고 새로운 setInterval 함수가 생성되는 것을 보장할 수 있습니다.
*/
