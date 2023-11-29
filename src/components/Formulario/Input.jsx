import React, {useState} from "react";
import './input.css';

export default () => {

    const [valor, setValor] = useState('inicial');

    function mudarvalor(e){
        setValor(e.target.value);
    }

    return(
        <div >
            <h2>{valor}</h2>
            <input className="input" value={valor}  onChange={mudarvalor}/>
        </div>
    )
}