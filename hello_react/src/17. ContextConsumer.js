import Context1 from './16. Context1'

const ContextConsumer = () => {
    return (
        <>
            <Context1.Consumer>
                {(obj) => <div>{obj.name}</div>}
            </Context1.Consumer>
        </>
    )
}
export default ContextConsumer // consumer를 해줌.
