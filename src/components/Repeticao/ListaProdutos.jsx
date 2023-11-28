import React from "react";
import Produtos from '../../data/produtos'
import '../layout/tabela.css'

export default () => {
    
    const produtos = Produtos.map(produto => {
        return <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preço}</td>
            </tr>
       

    })

    return(
        <div className="TabelaProdutos" >
            <table>
        <       thead className="head-table">
            <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Preço</th>
            </tr>
        </thead>
        <tbody>
            {produtos}
        </tbody>
        </table>
        </div>
    )
}