import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'

function CadastroCategoria () {
    const [categorias, setCategorias] = useState(['Teste'])
    
    const valoresIniciais = {
        nome: 'Categoria',
        descricao: 'Descricao',
        cor: '#000'
    }

    const [values, setValues] = useState(valoresIniciais)


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
                 categorias.push(values)
                 setCategorias(categorias)
            }}>
                <label>Nome da categoria: {values.nome}</label>
                <input type="text" value={values.nome} onChange={function handle (e) {
                    setValue('nome', e.target.value)
                }}/>

                <label>Descricao: {values.descricao}</label>
                <textarea type="text" value={values.descricao} onChange={function handle (e) {
                    setValue('descricao', e.target.value)
                }}></textarea>

                <label>Cor: {values.cor}</label>
                <input type="color" value={values.cor} onChange={function handle (e) {
                    setValue('cor', e.target.value)
                }}/>

                <button>Cadastrar</button>
            </form>

            <ul>
                { categorias.map( function (item, indice) {
                    return (
                        <li key={`${item.nome}${indice}`}>
                            {item}
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