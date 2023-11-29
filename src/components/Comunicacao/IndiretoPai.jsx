import React, {useState} from "react";
import IndiretoFilho from "./IndiretoFilho";


export default () => {
    const [nomePai, setNomePai] = useState('?');
    const [idadePai, setIdadePai] = useState(0);
    const [Painerd, setPaiNerd] = useState(false);



    function enviainfo(nomePai,idadePai,Painerd){
        setNomePai(nomePai);
        setIdadePai(idadePai);
        setPaiNerd(Painerd);
    }

    return(
        <div>
            <span>Nome: <strong>{nomePai} </strong></span>
            <span>Idade: <strong>{idadePai} </strong></span>
            <span>Nerd: <strong>{Painerd ? 'Sim' : 'Não'}</strong> </span>
          <IndiretoFilho propsFilho={enviainfo} />
        </div>
    )
}