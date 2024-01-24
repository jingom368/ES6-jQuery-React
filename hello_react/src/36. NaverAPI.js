import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NaverAPI = () => {
    const [data, setData] = useState(null)
    const fetchData = async () => {
        const res = await axios.get('/v1/search/blog.json', {
            // 불러올 api 주소
            params: {
                query: '리액트', // query는 필수값
            },
            headers: {
                'X-Naver-Client-Id': 'NpNfzRIzn4AxmlAe0bgp',
                'X-Naver-Client-Secret': 'qtHeqbBnHQ',
            },
        })
        // console.log('res', res['data'])
        // setData(res['data'])
        console.log(res)
        setData(res.data)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>
                <ul>
                    {data &&
                        data.items.map((e, i) => <li key={i}>{e.title}</li>)}
                </ul>
            </div>
        </>
    )
}

export default NaverAPI
