import Axios1 from './35. Axios1'
import Axios2 from './37. Axios2'

import { Routes, Route, Router } from 'react-router-dom'
import Main from './a_Main'
import Layout from './a_Layout'
import NaverAPI from './36. NaverAPI'
import SignIn from './a_Signin'
import Axios3 from './38. Axios3'
import Axios4 from './39. Axios4'

const AppAxios = () => {
    return (
        <>
            {/* <Routes>
                <Route element={<Layout />}>
                    <Route path="/login" element={<SignIn />}></Route>
                    <Route path="/" element={<Main />} />
                </Route>
            </Routes> */}
            {/* <Axios1 /> */}
            {/* <Axios2 /> */}
            {/* <Axios3 /> */}
            <Axios4 />
            {/* <NaverAPI />     */}
        </>
    )
}

export default AppAxios
