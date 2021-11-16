import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home } from './views/Home';

import {ListarCli} from './views/Cliente/Listar'
import {CriarCli} from './views/Cliente/Criar'
import { AlterarCli } from './views/Cliente/Alterar';
import { ExcluirCli } from './views/Cliente/Excluir';

import {ListarPed} from './views/Pedido/Listar'
import { CriarPed } from './views/Pedido/Criar';
import { AlterarPed } from './views/Pedido/Alterar';
import { ExcluirPed } from './views/Pedido/excluir';

import {ListarServ} from './views/Servico/Listar'
import { AlterarServ } from './views/Servico/Alterar';
import { CriarServ } from './views/Servico/Criar';
import { ExcluirServ } from './views/Servico/Excluir';

import {Menu} from './Components/Menu';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/listar-cliente' component={ListarCli}/>
          <Route path='/criar-cliente' component={CriarCli}/>
          <Route path='/alterar-cliente' component={AlterarCli}/>
          <Route path='/excluir-cliente' component={ExcluirCli}/>

          <Route path='/listar-pedido' component={ListarPed}/>
          <Route path='/criar-pedido' component={CriarPed}/>
          <Route path='/alterar-pedido' component={AlterarPed}/>
          <Route path='/excluir-pedido' component={ExcluirPed}/>

          <Route path='/listar-servico' component={ListarServ}/>
          <Route path='/alterar-servico' component={AlterarServ}/>
          <Route path='/criar-servico' component={CriarServ}/>
          <Route path='/excluir-servico' component={ExcluirServ}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
