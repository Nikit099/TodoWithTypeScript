import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AboutPage from "./pages/aboutPage";
import TodoPage from "./pages/todosPage";

const App: React.FC = () => {
  const [theme, setTheme] = useState<boolean>(false)
  const handleTheme = () => {
    setTheme(prev => !prev)
  } 
  return(
    
    <BrowserRouter>
    <div className={theme ? 'nomain' : 'main'} >
    <Navbar theme={theme} handleTheme={handleTheme} />
    <div className="container ">
      <Switch>
        <Route  path='/' exact >
        <TodoPage theme={theme} />
        </Route>
        <Route  path='/about'  >
        <AboutPage />
        </Route>
      </Switch>
    </div>
    </div>
    </BrowserRouter>
    
  )
};

export default App;
