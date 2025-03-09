import React from "react";
import HelloWord from "./components/product.jsx";


const App = () => {
  return (
    <div>
      <HelloWord title='Book1' />
      <HelloWord title='Book2' />
      <HelloWord title='Book3' />
      
    </div>
  );
}

export default App;