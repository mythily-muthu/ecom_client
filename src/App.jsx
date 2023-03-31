import { Route, Router } from "react-router";
import "./App.css";
import Product from "./components/Product";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Success from "./Pages/Success";

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/produts/:category">
        <ProductList />
      </Route>
      <Route path="/product/:id">
        <Product />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Router>
  );
};

export default App;
