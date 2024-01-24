import { Link } from 'react-router-dom'

import SignIn from './a_Signin'
import SignUp from './a_Signup'

// prettier-ignore
const Main = () => {
    return (
        <>
            <div>
                {/* <SignIn />
                <SignUp /> */}
                
                {/* <h1>Main</h1>
                <div><a href="/intro">소개</a></div>
                <div><Link to="/intro">소개</Link></div>
                <br />
                <div><h2>라우터변수 방식</h2></div>
                <div><Link to="/profile/홍길동">홍길동</Link></div>
                <div><Link to="/profile/이순신">이순신</Link></div>
                <div><h2>파라미터 변수 방식</h2></div>
                <div><Link to="/profile2?a=1&b=2&c=3">프로필2</Link></div> */}
            </div>
        </>
    )
}

export default Main
