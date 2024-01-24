import { useState } from 'react'
import axios from 'axios'

const Axios4 = () => {
    console.log('렌더링')
    const [data, setData] = useState({
        id: '',
        password: '',
    })

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('data :  ', data) // 객체
        console.log('JSON.stringify(data) : ', JSON.stringify(data)) // 문자열로
        axios.post('http://localhost:8080/api/login', data).then((res) => {
            // axios.post('http://localhost:8080/api/login', JSON.stringify(data)).then((res) => {
            console.log('res : ', res)
            console.log('res.data : ', res.data)

            // 로그인 성공여부 체크
            window.sessionStorage.setItem('loginId', res.data.id)
            window.sessionStorage.setItem('loginPassword', res.data.password)
            setData({ ...data }) // => 렌더링이 다시 진행 되어짐.
        })
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" name="id" onChange={onChange} />
                <br />
                <input type="password" name="password" onChange={onChange} />
                <br />
                <input type="submit" value="로그인"></input>
                <br />
                {window.sessionStorage.getItem('loginId')
                    ? '로그인'
                    : '미로그인'}
                {/* <input
                    type="button"
                    value="로그인"
                    onClick={onSubmit}
                    id="loginButton"
                /> */}
                {/* <label htmlFor="loginButton">로그인</label> */}
            </form>
        </>
    )
}

export default Axios4
