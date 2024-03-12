import logo from './logo.svg';
import './App.css';
import LoginSignup from '../src/Components/Login-Signup/LoginSignup'
import Navbar from './Components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar/>
    <LoginSignup/>
    </div>
  );
}

export default App;
