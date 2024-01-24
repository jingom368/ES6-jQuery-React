import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios2 = () => {
    const [data, setData] = useState(null)
    const getApi = () => {
        axios.get('http://localhost:8080/api/customer/all').then((res) => {
            setData(res.data)
            console.log(res.data)
        })
    }
    const [title, setTitle] = useState('')
    const getTitle = () => {
        for (let i = 0; i < data.length; i++) {
            setTitle(data[i].title)
        }
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <>
            <button onClick={getApi}>불러오기</button>
            <button onClick={getTitle}>title</button>
            {/* <div>{data && JSON.stringify(data)}</div> */}
            <div>
                {data && data.map((e, i) => <li key={i}>{e.CUSTOMER_NAME}</li>)}
            </div>
        </>
    )
}

export default Axios2
