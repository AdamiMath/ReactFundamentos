import React from "react";
import Random from "./components/Random";
import Card from "./components/layout/Card";


export default () =>
        <div className="App ">
            <Card titulo="Desafio Aleatório" >
                <Random 
                min={1} max={10}
                /> 
            </Card>
            <Card titulo="Desafio Aleatório" color="#6c178b">
                <Random 
                min={1} max={10}
                /> 
            </Card>
            <Card titulo="Desafio Aleatório" color="#df0093">
                <Random 
                min={1} max={10}
                /> 
            </Card>
        </div>
    