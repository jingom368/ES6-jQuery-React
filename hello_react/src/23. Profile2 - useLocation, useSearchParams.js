import { useLocation, useSearchParams } from 'react-router-dom'

const Profile2 = () => {
    // const params = useLocation()
    const [params, setParams] = useSearchParams()
    console.log(params)
    return (
        <>
            <div>프로필</div>
            {/* <div>params:{params.search}</div> */}
            <div>params:{params.get('a')}</div>
            <div>params:{params.get('b')}</div>
            <div>params:{params.get('c')}</div>
        </>
    )
}

export default Profile2
