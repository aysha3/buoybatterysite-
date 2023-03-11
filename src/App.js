import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BuoyInfoPage from './Pages/BuoyInfoPage';
import AboutUsPage from './Pages/AboutUsPage';
import MainNavigationBar from './Components/MainNavigationBar';
import './App.css';


function App() {

  const router = createBrowserRouter([
    {
      path: "/buoyInfo",
      element: <BuoyInfoPage></BuoyInfoPage>
    },
    {
      path: "/",
      element: <AboutUsPage></AboutUsPage>
    }
  ]);

  
  return (
    <div className="App">
      <header id="navigationSection">
        <MainNavigationBar></MainNavigationBar>
      </header>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;