import logo from './logo.svg';
import './App.css';
import CartWidget from './components/CartWidget';
import Checkout from './components/Checkout';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route exact path/>
  </Routes>
    </BrowserRouter>
  );
}

export default App;
