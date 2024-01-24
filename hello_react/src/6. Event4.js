const onClick = (e) => {
    const { isTrusted, target, bubbles } = e
    console.log('클릭 이벤트 : ', isTrusted, target, bubbles)
}
const onClick2 = (e) => {
    const { isTrusted, target, bubbles, currentTarget } = e
    console.log('클릭 이벤트2 : ', isTrusted, target, bubbles, currentTarget)
}

export default function Event4() {
    return (
        <>
            <div onClick={onClick2}>
                <div onClick={onClick}>클릭해볼래?4</div>
            </div>
        </>
    )
}
