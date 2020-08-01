/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);

  const { clear, handle, values } = useForm(valoresIniciais);

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';

    fetch(URL).then((response) => response.json()).then((response) => setCategorias([...response]));
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([...categorias, values]);
          clear({ nome: '', descricao: '', cor: '' });
        }}
      >
        <FormField type="text" name="nome" value={values.nome} onChange={handle} label="Nome da Categoria" />
        <FormField type="textarea" name="descricao" value={values.descricao} onChange={handle} label="Descrição" />
        <FormField type="color" name="cor" value={values.cor} onChange={handle} label="Cor" />

        <Button>Cadastrar</Button>
      </form>

      { categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((item) => (
          <li key={item.titulo}>
            {item.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
