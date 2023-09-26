import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './pages/Products';
import Navbar from './components/Navbar'
import Add from './pages/Add';
import Update from './pages/Update';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
