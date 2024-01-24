import Depth3 from './34. Depth3'

const Depth2 = () => {
    console.log('Depth2')
    return (
        <>
            <div>
                <h1>Depth2 </h1>
                <Depth3 />
            </div>
        </>
    )
}
export default Depth2
