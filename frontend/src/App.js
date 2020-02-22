import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NewsPage from "./containers/NewsPage/NewsPage";
import AddNews from "./containers/AddNews/AddNews";
import SingleNewsPage from "./containers/SingleNewsPage/SingleNewsPage";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={NewsPage} />
      <Route path="/news/:id" component={SingleNewsPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/add-news" component={AddNews} />
      <Route render={() => <h1>Not found</h1>} />
    </Switch>
  </Layout>
);

export default App;
