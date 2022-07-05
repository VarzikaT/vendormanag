import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/* <Welcome /> */}
      <Login/>
    </div>
  );
}

export default App;