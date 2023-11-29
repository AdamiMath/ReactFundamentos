import React from "react";

export default ({propsFilho}) => {
    return(
        <div>
            <div>Filho</div>
            <button onClick={
                function(e){
                    propsFilho('Antonio', 59, true);
                }
            }>Enviar Informações</button>
        </div>
    )
}