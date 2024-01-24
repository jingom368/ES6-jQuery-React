import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div>
                <div>헤더</div>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout
