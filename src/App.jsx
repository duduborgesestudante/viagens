import './App.css'
import Home from './pages/home'
import Destinos from './pages/destinos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato';
function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/contatos" element={<Contato />} />
      </Routes>
    </Router>

  )
}

export default App