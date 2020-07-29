import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'

const Pagina404 = function () {
  return (
    <div>
      Página 404
    </div>
  )
}


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/videos" component={CadastroVideo} />
      <Route path="/" component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
