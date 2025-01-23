
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Drama from './Drama';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("hi")
  }, []);
  return (
   
   <div className="App">
    <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/drama" element={<Drama />} />
          <Route path="*" element={<Main />} />
        </Routes>
    </BrowserRouter>
   </div>  
   
   
  );
}

export default App;
