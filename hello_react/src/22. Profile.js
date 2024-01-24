import { useParams, Navigate } from 'react-router-dom'

const Profile = () => {
    const params = useParams()
    const isLogin = true // 로그인여부
    if (!isLogin) return <Navigate to="/login" replace={true} />
    return (
        <>
            <div>프로필</div>
            <div>params:{params.name}</div>
        </>
    )
}

export default Profile
