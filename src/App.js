import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from './Pages/SignUp';
import SignIn from "./Pages/SignIn";
import ItemsScreen from './Pages/ItemsScreen';
import RegisterScreen from "./Pages/Register";
function App() {
  return (
    <Router>
           <Switch>
              <Route path="/items"><ItemsScreen /></Route>
              <Route path="/register"><RegisterScreen /></Route>
              <Route path="/sarvesh"><SignIn /></Route>
              <Route path="/"><SignUp /></Route>
           </Switch>
    </Router>
  );
}


export default App;

