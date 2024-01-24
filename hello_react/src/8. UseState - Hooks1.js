import React, { useState } from 'react'
const Hooks1 = () => {
    const [value, setValue] = useState(0)

    return (
        <>
            <div>
                {value}
                <button
                    onClick={() => {
                        setValue(value + 1)
                    }}
                >
                    증가
                </button>
                <button
                    onClick={() => {
                        setValue(value - 1)
                    }}
                >
                    감소
                </button>
            </div>
        </>
    )
}
export default Hooks1
