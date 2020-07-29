import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function CadastroCategoria () {
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000FFF'
    }
    const [categorias, setCategorias] = useState([])

    const [values, setValues] = useState(valoresIniciais)

    function handle (e) {
        const { name, value } = e.target
        setValue(name, value)
    }


    function setValue (chave, valor) {
        setValues({
            ...values,
            [chave]: valor
        })
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form style={{ background: values.cor }} onSubmit={function handleSubmit (e) {
                 e.preventDefault()
                 setCategorias([...categorias, values])
                 setValues({nome: '', descricao: '', cor: ''})
            }}>
                <FormField value={values.nome} handle={handle} />

                <label>Descricao: {values.descricao}</label>
                <textarea name="descricao" type="text" value={values.descricao} onChange={handle}></textarea>

                <label>Cor: {values.cor}</label>
                <input name="cor" type="color" value={values.cor} onChange={handle}/>

                <button>Cadastrar</button>
            </form>

            <ul>
                { categorias.map( function (item, indice) {
                    return (
                        <li key={`${item.nome}${indice}`}>
                            {item.nome}
                        </li>
                    )
                }) }
            </ul>

            <Link to="/">
                Ir para a Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria