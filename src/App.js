import logo from './logo.svg';
import './App.css';
import LoginSignup from '../src/Components/Login-Signup/LoginSignup'
import Navbar from './Components/Navbar/Navbar'
import Carousel from './Components/Carousels/Carousel'
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Carousel/> */}
    <LoginSignup/>
    </div>
  );
}

export default App;
