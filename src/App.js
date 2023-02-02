import "./App.css";
import "aos/dist/aos.css";
// import { Route, Router } from 'react-router-dom';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Details from "./details/Details";
import Combiner from "./combiner/Combiner";
import Landingpage from "./landingPage/Landingpage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/detail" component={Details} />
          <Route exact path="/landing" component={Combiner} />
          <Route exact path="/" component={Landingpage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
