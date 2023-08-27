import './App.css';
import Profilpage from './pages/Profil';
import HomePage from './pages/Home';
import Navbar from './components/Navbar';
import SignupPage  from './pages/Signup';
import SigninPage from './pages/Signin';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { apiEndpoint } from './ApiConfig';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/'element={<SignupPage apiEndpoint={apiEndpoint} />}/>
        <Route path='/profil' element={<Profilpage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/signin' element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
