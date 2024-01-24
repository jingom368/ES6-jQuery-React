import { Routes, Route, Router, Redirect, Switch } from 'react-router-dom'
import Main from './a_Main'
import Layout from './a_Layout'
import SignIn from './a_Signin'
const App = () => {
    //prettier-ignore
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/login" element={<SignIn />}></Route>
                <Route path="/" element={<Main />} />
            </Route>
        </Routes>

        // <Router>
        //     <Switch>
        //         <Redirect exact from="/" to="/Main" />
        //         <Route path="/home" layout={MainLayout} component={Home} />
        //         <Route path="/board" layout={MainLayout} component={Board} />
        //         <Route path="/product" layout={MainLayout} component={Product} />
        //         <Route path="/not-found" layout={MainLayout} component={NotFoundPage} />
        //         <Redirect to="/not-found" />
        //     </Switch>
        // </Router>
    )
}

export default App
