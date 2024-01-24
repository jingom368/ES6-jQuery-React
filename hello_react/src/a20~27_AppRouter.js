import { Routes, Route, Router } from 'react-router-dom'
// import Main from './20. Main'
import Intro from './21. Intro'
import Profile from './22. Profile'
import Profile2 from './23. Profile2 - useLocation, useSearchParams'
import Layout from './24. Layout'
import Counter from './9. UseState - Counter'
import Greet from './1. Greet'
import Main from './25. useNavigate'
import NotFound from './26. NotFound'
import Login from './27. Login'
// import Greet from './1. Greet'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/profile/:name" element={<Profile />} />
                    <Route path="/profile2" element={<Profile2 />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/greet" element={<Greet />}></Route>
            </Routes>
        </>
    )
}

export default AppRouter
