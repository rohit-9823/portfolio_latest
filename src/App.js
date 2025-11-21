import "./App.css";
import "aos/dist/aos.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Details from "./details/Details";
import Combiner from "./combiner/Combiner";
import Landingpage from "./landingPage/Landingpage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/landing" component={Combiner} />
          <Route path="/detail" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
