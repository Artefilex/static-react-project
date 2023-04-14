import {Footer,Navbar ,Home} from "./Components";
import { BrowserRouter as Router } from "react-router-dom";
import Location from "./Components/Navbar/Routes/Location";


function App() {
  return (
    <Router>
       <Navbar/>
       <Home/>       
       <Location/>
       <Footer/> 
    
    </Router>
  );
}

export default App;
