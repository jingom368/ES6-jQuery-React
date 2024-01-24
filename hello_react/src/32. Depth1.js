import Depth2 from './33. Depth2'
import { useSelector, useDispatch } from 'react-redux'

const Depth1 = () => {
    console.log('Depth1')
    const number = useSelector((s) => s.number)
    return (
        <>
            <div>
                <h1>Depth1 : {number}</h1>
                <Depth2 />
            </div>
        </>
    )
}
export default Depth1
