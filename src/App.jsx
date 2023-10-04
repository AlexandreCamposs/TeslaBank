import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/index';
import Home from './pages/Home/index';
import Benefit from './pages/Benefit';
import AccountDigital from './pages/AccountDigital';
import Support from './pages/Support';
import LoginForm from './components/LoginForm/index';
import RegisterForm from './components/RegisterForm/index';

import './App.scss';
import Footer from './components/Footer';

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
            <Route path="/accountDigital" element={<AccountDigital />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
