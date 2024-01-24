const onChange1 = (e) => {
    console.log(e.target.value)
}
const onChange2 = (e) => {
    console.log(e.target.checked)
}
const onChange3 = (e) => {
    console.log(e.target.files)
}
export default function Event5() {
    return (
        <>
            <input type="text" onChange={onChange1} />
            <input type="checkbox" onChange={onChange2} />
            <input type="file" onChange={onChange3} />
        </>
    )
}
