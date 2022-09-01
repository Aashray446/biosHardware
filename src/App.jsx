import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Team from "./Team";

const App = () => (
  <BrowserRouter>
  <div className="bg-primary w-full overflow-hidden">
    <Routes> 
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/team' element={<Team/>}/>
  </Routes>
  </div>
  </BrowserRouter>
  
);

export default App;