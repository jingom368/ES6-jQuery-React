import React from 'react'
import ReactDOM from 'react-dom/client'
// import App1 from './App1'
// import App2 from './App2'
// import App3 from './App3'
// import AppContext from './AppContext_16 ~ 19'
// import AppRouter from './AppRouter_20 ~ '
import AppRedux from './a28~34_AppRedux'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import AppAxios from './a35~39.AppAxios'
import './index.css'
import './tailwind.css'
import AppRouter from './a20~27_AppRouter'
// import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // <React.StrictMode>
    // <App1 />,
    // <App2 />,
    // <App3 />,
    // <AppContext />,

    <BrowserRouter>
        {/* <AppRouter /> */}
        {/* <AppRedux />, */}
        <AppAxios />
        {/* <App /> */}
    </BrowserRouter>,
    // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
