import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './body/home page/HomePage';
import LoginPage from './body/login signin page/LoginPage';
import SigninPage from './body/login signin page/SigninPage';
import UploadPage from './body/upload page/UploadPage';
import VideoPage from './body/video page/VideoPage';
import Header from './header/Header';

//IMPLEMENTAR LAZY LOADING CON SUSPENSE, FALLBACK ETC


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/signin' element={<SigninPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/upload' element={<UploadPage/>}/>
        <Route path='/video/:videoID' element={<VideoPage/>} />
      </Routes>
    </div>
    </BrowserRouter> 
  );
}

export default App;
