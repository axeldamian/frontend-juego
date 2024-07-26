import React from 'react';
import './SymbolBlue.css';
import './SymbolPink.css';
import './SymbolRed.css';
import './SymbolViolet.css';

  const DashboardGame = () => {
    return (
        <div style={{ width:"35%", height: "300px"}} >
           
            <div className='SymbolRed' >
                ▲
            </div>

            <div className='SymbolBlue' >
                ●
            </div>
            
            <div className='SymbolPink' >
                ■
            </div>


            <div className='SymbolViolet' >
                ▲
            </div>

            <div className='SymbolBlue' >
                ●
            </div>
            
            <div className='SymbolPink' >
                ■
            </div>

                      
            <div className='SymbolRed' >
                ▲
            </div>

                       
            <div className='SymbolViolet' >
                ●
            </div>
            
            <div className='SymbolBlue' >
                ■
            </div>

        </div>
    );
  };
  
  export default DashboardGame;