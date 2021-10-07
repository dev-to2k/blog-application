import React, { useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageRender from "./PageRender";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import { Alert } from "./components/alert/Alert";
import { useDispatch } from "react-redux";
import { refreshToken } from "./redux/actions/authAction";
import { getCategories } from "./redux/actions/categoryAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Alert />
      <Header />
      <div className="container px-5 mx-auto">
        <Switch>
          <Route exact path="/" component={PageRender} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:slug" component={PageRender} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
