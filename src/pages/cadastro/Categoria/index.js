import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'

function CadastroCategoria () {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form>
                <label>Nome da categoria</label>
                <input type="text" />

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/">
                Ir para a Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria