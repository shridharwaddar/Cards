import React from "react";
import Cards from "./cards/Cards";
import JSON from "./data.json"
import "./global.css"






const App=()=>{
    return(
        <Cards play_load={JSON}/>
        
    )
}
export default App;