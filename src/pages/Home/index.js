import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
/* import dados from '../../data/dados_iniciais.json'; */
import categorias from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dados, setDados] = useState({
    categorias: [],
  });

  useEffect(() => {
    categorias.getAllWithVideos().then(setDados);
  }, []);

  return (
    <PageDefault paddingAll={0}>
      <Menu />
      {dados.length === 0 && (<div>Loading....</div>)}
      { dados.length > 0
        && (
        <>
          <BannerMain
            videoTitle={dados[0].videos[0].titulo}
            url={dados[0].videos[0].url}
            videoDescription="Conteúdo avançado sobre programação e arquitetura..."
          />
          <Carousel ignoreFirstVideo category={dados[0]} />
        </>
        )}
      { /* <Carousel category={dados.categorias[1]} />
      <Carousel category={dados.categorias[2]} />
      <Carousel category={dados.categorias[3]} />
      <Carousel category={dados.categorias[4]} />
  <Carousel category={dados.categorias[5]} /> */}
    </PageDefault>
  );
}

export default Home;
