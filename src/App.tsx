import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import Navbar from './components/Navbar';
import Employees from './components/Employees';

function App() {

  return <>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/employees' element={<Employees />} />
      </Routes>
    </HashRouter>
    <div className="container">
    </div></>
}

export default App
