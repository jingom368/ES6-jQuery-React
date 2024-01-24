import React, { useState } from 'react'
import axios from 'axios'

const Axios1 = () => {
    const [data, setData] = useState(null)
    const getApi = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
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

    return (
        <>
            <button onClick={getApi}>불러오기</button>
            <button onClick={getTitle}>title</button>
            {/* <div>{data && JSON.stringify(data)}</div> */}
            <div>
                {data && data.map((e, index) => <li key={e.id}>{e.title}</li>)}
            </div>
        </>
    )
}

export default Axios1
