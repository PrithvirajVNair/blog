import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Open from './components/Open';

function App() {
  return (
    <div className="App">
      <Open/>
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
