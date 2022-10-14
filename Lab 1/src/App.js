import React from 'react';
import './App.css';

function App(){
    return (
        <div>
            <h2 className={"H"} align={"left"}> Product list </h2>
            <button style={{marginLeft: "30px"}} className={"right"} id={"#delete-product-btn"}>MASS DELETE</button>
            <button style={{marginRight: "30px"}} className={"right"} id={"add"}>ADD</button>
            <hr/>
        </div>
    )
}
export default App;