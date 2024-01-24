import { Link, useNavigate } from 'react-router-dom'

// prettier-ignore
const Main = () => {
    const navigate = useNavigate();
    const hello = () => {
        console.log('hello')
    }
    const move = () => {
        navigate('/greet')
    }
    return (
        <>
            <div>
                <h1>Main</h1>
                <div><a href="/intro">소개</a></div>
                <div><Link to="/intro">소개</Link></div>
                <br />
                <div><h2>라우터변수 방식 + 리다이렉트 처리</h2></div>
                <div><Link to="/profile/홍길동">홍길동</Link></div>
                <div><Link to="/profile/이순신">이순신</Link></div>
                <div><h2>파라미터 변수 방식</h2></div>
                <div><Link to="/profile2?a=1&b=2&c=3">프로필2</Link></div>
                {/* <button onClick={move}>페이지이동</button> */}
                {/* <button onClick={() => navigate('/greet')}>페이지이동</button> */}
                <button className="hello" onClick={()=>navigate('/greet')}>페이지이동</button>
            </div>
        </>
    )
}

export default Main
