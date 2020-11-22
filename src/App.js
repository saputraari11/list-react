import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom"
import Server from "./component/server"

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar- bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item active">
        <Link to="/">Beranda</Link>
        </li>
     <li className="navbar-item ml-2">
       <Link to="/hari">hari</Link>
     </li>
     <li className="navbar-item ml-2">
     <Link to="/belanja">belanja</Link>
     </li>

      </ul>
      </nav>    
    <Server/>
    </div>
  );
}

export default App;
