import React from 'react';
import { Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import Register from './components/Register';


const App = () => {
  return (
    <>
    <Router>
   <div>
      <Routes>
      <Route path="/register" element={<Register/>}/>
      </Routes>
     </div>
    </Router>
    </>

  );
};

export default App;
