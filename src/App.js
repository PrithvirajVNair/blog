import './App.css';
import AddBlog from './components/AddBlog';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Open from './components/Open';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
  <Routes>
    <Route path='/' element={<Open/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/AddBlog' element={<AddBlog/>}/>
  </Routes>
    </div>
  );
}

export default App;
