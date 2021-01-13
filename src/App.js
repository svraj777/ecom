import logo from "./logo.svg";
import "./App.css";
import Login from "./Componants/login";
import SignUp from "./Componants/signUp";
import Menu from "./common/menu";
import About from "./pages/about";
import Home from "./pages/home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Menu />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/topics' exact />
        <Route path='/signin' exact component={Login} />
        <Route path='/signup' component={SignUp} exact />
        <Route path='/' component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
