import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home'
import { Menu } from './components/Menu';

import { ListarCli } from './views/Cliente/ListarCli';
import { CadastrarCli } from './views/Cliente/cadastrarCli';
import { EditarCliente } from './views/Cliente/editarCliente';
import { ListarPedByClienteId } from './views/Cliente/infoCli';

import { ListarPed } from './views/Pedido/ListarPed';
import { CadastrarPed } from './views/Pedido/cadastrar';
import { InfoPed } from './views/Pedido/infoPed';
import { EditarPedido } from './views/Pedido/EditarPedido';

import { ListarServ } from './views/Servico/ListarServ';
import { EditarServ } from './views/Servico/editarServ';
import { Item } from './views/Servico/Item'
import { Cadastrar } from './views/Servico/cadastrar';

import { ListarItem } from './views/Item/ListarItem';
import { CadastrarItem } from './views/Item/cadastrarItem';
import { EditarItem } from './views/Item/EditarItem';

import { ListarCompra } from './views/Compra/ListarCompra';
import { CadastrarCompra } from './views/Compra/CadastrarCompra';
import { InfoCompra } from './views/Compra/InfoCompra';
import { EditarCompra } from './views/Compra/EditarCompra';

import { ListarProdutos } from './views/Produtos/ListarProdutos';
import { CadastrarProduto } from './views/Produtos/CadastrarProduto';
import { InfoPro } from './views/Produtos/infoPro';
import { EditarProduto } from './views/Produtos/EditarProduto';

import { EditarItemProduto } from './views/item-produto/EditarItemProduto';
import { ListarItemPro } from './views/item-produto/ListarItemPro';
import { CadastrarItemPro } from './views/item-produto/CadastrarItemPro';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listar-clientes" component={ListarCli} />
          <Route path="/cadastrarcliente" component={CadastrarCli} />
          <Route path="/listar-pedidos" component={ListarPed} />
          <Route path="/listar-servicos" component={ListarServ} />
          <Route path="/listar-pedido/:id" component={Item} />
          <Route path="/cadastrarservico" component={Cadastrar} />
          <Route path="/cadastrarpedido" component={CadastrarPed} />
          <Route path="/listarpedido/:id" component={InfoPed} />
          <Route path="/listar-item/" component={ListarItem} />
          <Route path="/cadastraritem/" component={CadastrarItem} />
          <Route path="/listar-pedido-do-cliente/:id" component={ListarPedByClienteId} />
          <Route path="/editarservico/:id" component={EditarServ} />
          <Route path="/listar-compra/" component={ListarCompra} />
          <Route path="/cadastrarcompra/" component={CadastrarCompra} />
          <Route path="/listar-produto/" component={ListarProdutos} />
          <Route path="/cadastrarproduto/" component={CadastrarProduto} />
          <Route path="/listar-item-produto/" component={ListarItemPro} />
          <Route path="/cadastraritemproduto/" component={CadastrarItemPro} />
          <Route path="/listarcompra/:id" component={InfoCompra} />
          <Route path="/listarproduto/:id" component={InfoPro} />
          <Route path="/editarproduto/:id" component={EditarProduto} />
          <Route path="/editarpedido/:id" component={EditarPedido} />
          <Route path="/editarcompra/:id" component={EditarCompra} />
          <Route path="/editarcliente/:id" component={EditarCliente} />
          <Route path="/editaritem/:PedidoId/:ServicoId" component={EditarItem} />
          <Route path="/editaritemproduto/:CompraId/:ProdutoId" component={EditarItemProduto} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;