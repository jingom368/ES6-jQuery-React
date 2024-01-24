import Context1 from './16. Context1'

const ContextConsumer2 = () => {
    return (
        <>
            <Context1.Consumer>
                {(obj) => <div>{obj.name}</div>}
            </Context1.Consumer>
        </>
    )
}
export default ContextConsumer2 // consumer를 해줌.
