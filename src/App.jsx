import './App.css';
import ProfilPage from './pages/Profil';
import HomePage from './pages/Home';
import Navbar from './components/Navbar';
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './pages/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
