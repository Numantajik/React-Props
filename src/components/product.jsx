import React from 'react';


const Helloword = ({ title }) => {
    return <div style={{ fontSize: "20px", backgroundColor:"teal",color: "black", border: "1px solid black", padding: "10px", margin: "5px" }}>
      {title}
    </div>;
  };
  

export default Helloword;
