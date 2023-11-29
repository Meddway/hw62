import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={(<Home/>)}/>
        <Route path="/сontacts" element={(<Contacts/>)}/>
        <Route path="/aboutUs" element={(<AboutUs/>)}/>
        <Route path="*" element={(<NotFound/>)}/>
      </Routes>
    </>
  );
};

export default App;
