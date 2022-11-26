//import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Employee} from './Employee';
import {Department} from './Department';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom' // In react-router-dom v6, "Switch" is replaced by routes "Routes". 

function App() {
  return (
    <BrowserRouter>

    <div className="App Container">
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btnoutline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btnoutline-primary" to="/department">
              Department
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btnoutline-primary" to="/employee">
              Employee
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/employee' element={<Employee/>}/>
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
