import React from "react";
import Random from "./components/Random";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";


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
            <Card titulo="Componente com Filhos" color="#6c178b">
             <Familia sobrenome="Lima">
                <FamiliaMembro nome="Pedro" />
                <FamiliaMembro nome="Ana"  />
                <FamiliaMembro nome="Gustavo" />
             </Familia>
            </Card>
        </div>
    