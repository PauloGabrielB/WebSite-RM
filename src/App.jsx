import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/page01/Home'
import Equipamentos from './pages/page02/Equipamentos'
import Betoneiras from './pages/page02/Categorias/Betoneiras.jsx'
import Caminhao from './pages/page02/Categorias/Caminhao'
import Compactador from './pages/page02/Categorias/Compactador.jsx'
import Compressores from './pages/page02/Categorias/Compressores.jsx'
import Container from './pages/page02/Categorias/Container.jsx'
import Diversos from './pages/page02/Categorias/Diversos.jsx'
import Escoramento from './pages/page02/Categorias/Escoramento.jsx'
import Ferramentas from './pages/page02/Categorias/Ferramentas.jsx'
import Geradores from './pages/page02/Categorias/Geradores.jsx'
import Maquinas from './pages/page02/Categorias/Maquinas.jsx'
import Cargas from './pages/page02/Categorias/Cargas.jsx'
import Plataformas from './pages/page02/Categorias/Plataformas.jsx'
import Terraplanagem from './pages/page02/Categorias/Terraplanagem.jsx'
import Torre from './pages/page02/Categorias/Torre.jsx'
import Sobre from './pages/page03/Sobre.jsx'
import Contato from './pages/page04/Contato.jsx'
import Trabalhe from './pages/page05/Trabalhe.jsx'
import Sac from './pages/page06/Sac.jsx'






function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Equipamentos' element={<Equipamentos />}/>
      <Route path='/Betoneiras' element={<Betoneiras />}/>
      <Route path='/Caminhao' element={<Caminhao />}/>
      <Route path='/Compactador' element={<Compactador />}/>
      <Route path='/Compressores' element={<Compressores />}/>
      <Route path='/Container' element={<Container />}/>
      <Route path='/Diversos' element={<Diversos />}/>
      <Route path='/Escoramento' element={<Escoramento />}/>
      <Route path='/Ferramentas' element={<Ferramentas />}/>
      <Route path='/Geradores' element={<Geradores />}/>
      <Route path='/Maquinas' element={<Maquinas />}/>
      <Route path='/Cargas' element={<Cargas />}/>
      <Route path='/Plataformas' element={<Plataformas />}/>
      <Route path='/Terraplanagem' element={<Terraplanagem />}/>
      <Route path='/Torre' element={<Torre />}/>
      <Route path='/Sobre' element={<Sobre />}/>
      <Route path='/Contato' element={<Contato />}/>
      <Route path='/Trabalhe' element={<Trabalhe/>}/>
      <Route path='/Sac' element={<Sac/>}/>
      
      <Route path='*' element={<h1>Not Found</h1>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
