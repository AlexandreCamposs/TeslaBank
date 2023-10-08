import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/index';
import Home from './pages/Home/index';
import Benefit from './pages/Benefit';
import Support from './pages/Support';
import LoginForm from './components/LoginForm/index';
import RegisterForm from './components/RegisterForm/index';

import './App.scss';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/benefit" element={<Benefit />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
