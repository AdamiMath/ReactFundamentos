import './Contador.css'
import React from "react";
import Display from './Display';
import Botoes from './Botoes';

export default class Contador extends React.Component{

    state = {
        number: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.passo,
            
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.passo,
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        })
    }

    render(){
        console.log(this);
        const { number } = this.state;
        return(
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={number} />
                <div>
                    <label>Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <Botoes incrementar={this.inc} decrementar={this.dec}/>
               
            </div>
        )
    }
}