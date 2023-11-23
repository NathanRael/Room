import '../css/custom.css';//bootsrtap sass


import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import WatchLists from './pages/WatchLists';
import WatchMovie from './pages/WatchMovie';
import NoPage from './pages/NoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <>

      <Router>
        <Navbar/>
        <Routes >
          <Route path='/'  element={<Home/>}></Route>
          <Route path='/Movie' element={<Movies/>}></Route>
          <Route path='/WatchList' element={<WatchLists/>}></Route>
          <Route path='/Watch' element={<WatchMovie/>}></Route>
          <Route path='*' element={<NoPage/>}></Route>
        </Routes>
      </Router>
    </> 

  );
}

