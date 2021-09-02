import store from "./stores/globalState";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import TodoPage from "./components/pages/TodoPage";
import RespPage from "./components/pages/RespPage";

import Navigation from "./components/Navigation";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation></Navigation>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/todo">
            <TodoPage />
          </Route>
          <Route path="/resps">
            <RespPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
