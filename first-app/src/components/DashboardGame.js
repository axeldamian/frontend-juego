import React from 'react';
import './Symbol.css';
import Symbols from './Symbols.js';

  const DashboardGame = () => {
    return (
        <div style={{ width:"35%", height: "300px"}} >

            <div className='Symbol ColorRed' >
                {Symbols.CIRCLE_BLUE.SYMBOL}
            </div>

            <div className='Symbol ColorViolet' >
                {Symbols.CIRCLE_BLUE.SYMBOL}
            </div>
            
            <div className='Symbol ColorPink' >
                {Symbols.CIRCLE_PINK.SYMBOL}
            </div>

            <div className='Symbol ColorViolet' >
                {Symbols.TRIANGLE_VIOLET.SYMBOL}
            </div>

            <div className='Symbol ColorBlue' >
                {Symbols.CIRCLE_BLUE.SYMBOL}
            </div>
            
            <div className='Symbol ColorPink' >
                {Symbols.SQUARE_PINK.SYMBOL}
            </div>


            <div className='Symbol ColorRed' >
                {Symbols.TRIANGLE_RED.SYMBOL}
            </div>


            <div className='Symbol ColorViolet' >
                {Symbols.CIRCLE_VIOLET.SYMBOL}
            </div>
            
            <div className='Symbol ColorBlue' >
                {Symbols.SQUARE_BLUE.SYMBOL}
            </div>

        </div>
    );
  };
  
  export default DashboardGame;