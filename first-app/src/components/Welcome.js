import React from 'react';

  const Welcome = ({ name }) => {
    return (
        <div style={{backgroundColor: "#EBEBEB", width:"50%", height: "400px", float: "left"}}>
            Hello, {name}
        </div>
    );
  };
  
  export default Welcome;