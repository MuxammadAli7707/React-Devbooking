import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Forum from './Components/Forum/Forum';
import Sign from './Components/Forum/Sign';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import Adiblar from './Components/main/card/Adiblar/Adiblar';
import obj from './Components/main/object/objects'
import Nasr from './Components/Nasr/Nasr';

function App() {
  const [newObj, setnewObj] = useState([...obj]);
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='nasr' element={<Nasr />} />
        <Route path='forum' element={<Forum />} />
        <Route path='nazm' element={<Sign />} />
        <Route path='Adiblar/:id' element={<Adiblar newObj={newObj} />} />
      </Routes>
    </>
  );
}

export default App;
