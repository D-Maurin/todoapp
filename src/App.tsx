import store from "./stores/globalState";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import TodoPage from "./components/pages/TodoPage";
import RespPage from "./components/pages/RespPage";

import Navigation from "./components/Navigation";
import EditRespPage from "./components/pages/EditRespPage";

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
          <Route exact path="/resps">
            <RespPage />
          </Route>
          <Route exact path="/resps/:id">
            <EditRespPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
