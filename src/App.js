import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from  './Pages/Home/Home.js'
import { BrowserRouter, Route, Routes  } from "react-router-dom"
import SignUp from "./Pages/SignUp/SignUp.js"
import LogIn from "./Pages/LogIn/LogIn.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/signUp" element ={ <SignUp></SignUp>}/>
        <Route path="/login" element ={ <LogIn></LogIn>}/>
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
