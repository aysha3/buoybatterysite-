import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import WhyUsPage from './Pages/WhyUsPage';
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
          <BuoyInfoPage></BuoyInfoPage>
          }></Route>
        <Route path="/whyus" element={
          <WhyUsPage></WhyUsPage>
          }></Route>
        <Route path="/timeline" element={
          <IdeaPage></IdeaPage>
          }></Route>
        <Route path="/mission" element={
          <IdeaPage></IdeaPage>
          }></Route>
        <Route path="/aboutus" element={<AboutUsPage></AboutUsPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;