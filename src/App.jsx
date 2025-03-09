import React from "react";
import HelloWord from "./components/Product/product.jsx";
import ProductList from "./components/ProductList/ProductList.js";


const App = () => {
  return (
    <div>
      <HelloWord title='Book1' />
      <HelloWord title='Book2' />
      <HelloWord title='Book3' />
      <ProductList />
    </div>
  );
}

export default App;