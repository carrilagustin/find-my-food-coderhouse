import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <>
        <NavBar />
        <Routes>
          <Route path='/home' element={<ItemListContainer />}/>
          <Route path='/category/:dishType' element={<ItemListContainer />}/>
          <Route path='/item/:dishId' element={<ItemDetailContainer />}/>
          <Route path='*' element={<ItemListContainer />}/>
          <Route/>
        </Routes>  
        {/* <ItemListContainer />
        <ItemDetailContainer /> */}
    </>
    </BrowserRouter>
  );
}

export default App;
