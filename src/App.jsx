import './App.css'
import React from "react";
import Random from "./components/Random";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/Repeticao/ListaAlunos";
import ListaProdutos from "./components/Repeticao/ListaProdutos";
import ParouImpar from "./components/condicional/ParouImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import IndiretoPai from "./components/Comunicacao/IndiretoPai";
import Input from "./components/Formulario/Input";
import Contador from './components/Contador/Contador';




export default () =>
        <div className="App ">
              <Card titulo="Lista de Produtos" color="#df0093">
                <Contador />
            </Card>
            <Card titulo="Lista de Produtos" color="#df0093">
                <Input />
            </Card>
            <Card titulo="Lista de Produtos" color="#df0093">
                <IndiretoPai />
            </Card>
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
            <Card titulo="Par ou Impar" color="#df0093">
                <ParouImpar numero="11" />
                <UsuarioInfo usuario={{nome: 'Fernando'}} />
                <UsuarioInfo usuario={{name: 'Fernando'}} />

            </Card>
        </div>
    