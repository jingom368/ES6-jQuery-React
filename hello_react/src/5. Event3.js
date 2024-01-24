const onClick = (e) => {
    const { isTrusted, target, bubbles } = e
    console.log('클릭 이벤트 : ', isTrusted, target, bubbles)
}

export default function Event3() {
    return (
        <>
            <div onClick={onClick}>클릭해볼래?</div>
        </>
    )
}
