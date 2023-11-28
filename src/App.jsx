import React from "react";
import Random from "./components/Random";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/Repeticao/ListaAlunos";
import ListaProdutos from "./components/Repeticao/ListaProdutos";


export default () =>
        <div className="App ">
            <Card titulo="Desafio Aleatório" >
                <Random 
                min={1} max={60}
                /> 
            </Card>
            <Card titulo="Desafio Aleatório" color="#6c178b">
                <Random 
                min={1} max={60}
                /> 
            </Card>
            <Card titulo="Desafio Aleatório" color="#df0093">
                <Random 
                min={1} max={60}
                /> 
            </Card>
            <Card titulo="Componente com Filhos" color="#6c178b">
             <Familia sobrenome="Lima" idade="25">
                <FamiliaMembro nome="Pedro" />
                <FamiliaMembro nome="Lucas" />
                <FamiliaMembro nome="Virgilio" />
             </Familia>
            </Card>
            <Card titulo="Lista de Alunos" color="#df0093">
                <ListaAlunos />
            </Card>
            <Card titulo="Lista de Produtos" color="#df0093">
                <ListaProdutos />
            </Card>
        </div>
    