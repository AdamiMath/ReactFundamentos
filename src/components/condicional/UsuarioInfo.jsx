import React from "react";
import If from './if'

export default props => {
    const usuario = props.usuario || {}

    return (
        <div>
            <If test={usuario && typeof usuario.nome === 'string' && usuario.nome.trim()}>
                <div>
                    Seja bem vindo  <strong>{usuario.nome}</strong>
                </div>
            </If>
            <If test={!usuario || !usuario.nome || typeof usuario.nome !== 'string'}>
                <div>
                    Seja bem vindo  <strong>Visitante</strong>
                </div>
            </If>
        </div>
    );
};
