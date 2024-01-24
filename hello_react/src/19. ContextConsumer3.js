import Context1 from './16. Context1'
import { useContext } from 'react'

const ContextConsumer3 = () => {
    const { name } = useContext(Context1) // 중괄호는 객체를 리턴한다는 거고 params라는 객체가 안에 들어있다는 뜻.
    return (
        <>
            {/* <Context1.Consumer>
                {(obj) => <div>{obj.name}</div>}
            </Context1.Consumer> */}
            <div>{name}</div>
        </>
    )
}
export default ContextConsumer3 // consumer를 해줌.
