import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Carousel from "./Components/Carousels/Carousel";

function App() {
  return (
    <div className="App">
     <MainLayout>
      <Carousel/>
     </MainLayout>
    </div>
  );
}

export default App;
