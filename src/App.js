import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BuoyInfoPage from './Pages/BuoyInfoPage';
import IdeaPage from './Pages/IdeaPage';
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
      <Route path="/" element={
          <HomePage></HomePage>
          }></Route>
        <Route path="/buoyInfo" element={
          <BuoyInfoPage></BuoyInfoPage>
          }></Route>
        <Route path="/idea" element={
          <IdeaPage></IdeaPage>
          }></Route>
        <Route path="/aboutus" element={<AboutUsPage></AboutUsPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;