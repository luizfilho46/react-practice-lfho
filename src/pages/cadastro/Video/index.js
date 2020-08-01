import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videoRepository from '../../../repositories/videos';
import categoriaRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const titulosCategorias = categorias.map(({ titulo }) => titulo);
  const { handle, values } = useForm({
    titulo: 'Padrão',
    url: 'https://www.youtube.com/watch?v=6Pjod34OCnE',
    categoria: 'Domain-driven Design',
  });

  useEffect(() => {
    categoriaRepository.getAll().then(setCategorias);
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        const categoriaSelecionada = categorias.find((categoria) => categoria.titulo === values.categoria);
        videoRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaSelecionada.id,
        }).then(() => {
          history.push('/');
        });
      }}
      >
        <FormField type="text" name="titulo" value={values.titulo} onChange={handle} label="Título do Vídeo" />
        <FormField type="text" name="url" value={values.url} onChange={handle} label="URL" />
        <FormField
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handle}
          label="Categoria"
          suggestions={titulosCategorias}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
