import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes}  from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Navigation from './component/Navigation';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Classes from './pages/dashboard/Classes';
import Niveaux from './pages/dashboard/Niveaux';
import Filiere from './pages/dashboard/Filiere';
import Classe from './pages/dashboard/Classe';
import Enseignant from './pages/dashboard/Enseignant';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Navigation/>
            <div id='center'>
            <Routes>
                <Route path="*" element={<Dashboard/>} />
                <Route index element={<Dashboard/>} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/dashboard' element={<Dashboard/>}>
                  <Route path='dash' element={<Enseignant/>} />
                  <Route path='class' element={<Classes/>} />
                  <Route path='owner' />
                  <Route path='payement' element={<Classe/>} />
                  <Route path='history' element={<Niveaux/>} />
                  <Route path='filiere' element={<Filiere/>} />
                </Route>

            </Routes>
            </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
