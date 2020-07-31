/* eslint linebreak-style: ["error", "windows"] */

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);

  const [values, setValues] = useState(valoresIniciais);

  function handle(e) {
    const { name, value } = e.target;
    // eslint-disable-next-line no-use-before-define
    setValue(name, value);
  }

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  useEffect(() => {
    const URL = 'http://localhost:3000/categorias';

    fetch(URL).then((response) => response.json()).then((response) => setCategorias([...response]));
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([...categorias, values]);
          setValues({ nome: '', descricao: '', cor: '' });
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
          <li key={item.nome}>
            {item.nome}
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
