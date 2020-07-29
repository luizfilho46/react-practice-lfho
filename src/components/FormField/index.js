import React from 'react'

function FormField ({ type, name, value, handle, label }) {
    return (
        <>
            <label>{label}: {value}</label>
            <input name={name} type={type} value={value} onChange={handle}/>
        </>
    )
}

export default FormField