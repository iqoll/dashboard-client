import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

import Products from './pages/Products';
import Add from './pages/Add';
import Update from './pages/Update';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar'

function App() {
  const {user} = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={user ? <Products/> : <Navigate to='/login'/>}/>
          <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
          <Route path='/register' element={!user ? <Register/> : <Navigate to='/'/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
