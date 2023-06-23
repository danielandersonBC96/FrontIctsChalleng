
//importando as telas

import NavBar from './Components/NavBar';
import Backdrop from './Components/Backdrop';
import SideDrawer from './Components/SideDrawer'

//lins e bibliotexas

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterShopping from './Routes/routes';
import { useState } from 'react';

function App() {

  const [sideToggle, setSideToggle] = useState(false)

  return (
    
    <BrowserRouter>
    <div className="App">
       {/*Barra de Navegação*/}
     <NavBar  click={() => setSideToggle(true)}  />
       {/*Menu latera*/}
      
       <SideDrawer show={ sideToggle}  click={ () => setSideToggle(false) } />
       <Backdrop show={ sideToggle}  click={ () => setSideToggle(false) } />
       {/*Pano de Fundo */} 
      
       {/*Rotas */} 
        <RouterShopping/> 
       {/*Tela Inicial*/}
       {/*Tela do Produto */}
       {/*Carrinho de compras*/}     
      
    
    </div>
    
    </BrowserRouter>
  );
}

export default App;
