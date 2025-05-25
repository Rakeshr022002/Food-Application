// App.jsx
import { useState } from 'react';
import './App.css'; 
import Home from './components/Home/Home';
import Intro_page from './components/IntroPage/IntroPage';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const [homePage, setHomePage] = useState(0);

  return (
    <>
      <div className="app-overall">
        <ToastContainer theme='dark' position="top-center" autoClose={2000} />
        {homePage === 0 ? <Intro_page setHome={setHomePage} /> : <Home />}
      </div>
    </>
  );
}
