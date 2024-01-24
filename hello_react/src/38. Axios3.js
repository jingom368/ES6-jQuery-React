import { useEffect, useState } from 'react'
import axios from 'axios'
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const Axios3 = () => {
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
            <div style={{ width: '650px', margin: '0 auto' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>고객명</TableCell>
                                <TableCell align="right">아이디</TableCell>
                                <TableCell align="right">생일</TableCell>
                                <TableCell align="right">전화번호</TableCell>
                                <TableCell align="right">이메일</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data &&
                                data.map((row, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.CUSTOMER_NAME}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            onClick={() => {
                                                console.log(row.CUSTOMER_ID)
                                            }}
                                        >
                                            {row.CUSTOMER_ID}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.BIRTH}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.PHONE_NUMBER}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.EMAIL}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default Axios3
