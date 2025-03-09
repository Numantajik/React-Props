import React from 'react';


const Helloword = ({ title }) => {
  const TitleHandler = () => {
    // console.log('TitleHandler');
    console.log({title});
  }
    return <div>
      <h1>{title}</h1>
      <div>
        <button clsssName='btn' onClick={TitleHandler}>Click me</button>
      </div>
    </div>;
  };
  

export default Helloword;
