import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Restview1 from './pages/Restview1';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/restview/:id' element={<Restview1></Restview1>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
