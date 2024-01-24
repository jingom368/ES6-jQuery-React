import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
const Redux2 = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(
        () => {
            dispatch({
                type: 'INCREASE',
                command: 'INSERT',
            })
        },
        // [dispatch]
    )

    // const increase = () => {
    //     dispatch({
    //         type: 'INCREASE',
    //         command: 'INSERT',
    //     })
    // }
    // const decrease = () => {
    //     dispatch({
    //         type: 'DECREASE',
    //         command: { cmd: 'DELETE', no: 1 },
    //     })
    // }

    return (
        <>
            {/* <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button> */}
        </>
    )
}
export default Redux2
