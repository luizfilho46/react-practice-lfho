import React from 'react'

function FormField ({ value, handle }) {
    return (
        <>
            <label>Nome da categoria: {value}</label>
            <input name="nome" type="text" value={value} onChange={handle}/>
        </>
    )
}

export default FormField