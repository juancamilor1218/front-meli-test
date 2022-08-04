
import './App.scss';
import { Detail } from './components/pages/Detail/Detail';


import {
  Routes,
  Route,
} from "react-router-dom";
import {Header} from './components/UI/organisms/Header/Header';
import { Home } from './components/pages/Home/Home';
import {Error } from './components/templates/Error/Error';

function App() {  
  return (
    <div className='App'>
        <Header></Header>
        
        <Routes>      
          <Route path="/items" element={<Home />} />     
          <Route path="/items/:id" element={<Detail />} />
          <Route path="/" element={<Home/>} />
        </Routes>
    </div>
 
  );
}

export default App;
