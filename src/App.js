import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import BuoyInfoPage from './Pages/BuoyInfoPage';
import AboutUsPage from './Pages/AboutUsPage';
import MainNavigationBar from './Components/MainNavigationBar';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <header id="navigationSection">
        <MainNavigationBar></MainNavigationBar>
      </header>

      <Routes>
        <Route path="/buoyInfo" element={<BuoyInfoPage></BuoyInfoPage>}></Route>
        <Route path="/" element={<AboutUsPage></AboutUsPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;