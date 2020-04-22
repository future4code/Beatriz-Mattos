import React from 'react';


export class Etapa1 extends React.Component {
    render() {
        return (
            <div className={'App'}>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
            </div>

            <div> 
                <label>1. Qual é o seu nome?</label>
                <input type="text" value={this.state.value} />
            </div>

            <div>
                <label>2. Qual sua idade?</label>
                <input type="text" value={this.state.value} />
            </div>

            <div>
                <label>3. Qual seu e-mail?</label>
                <input type="text" value={this.state.value} />
            </div>

            <div>
                <label>4. Qual a sua escolaridade?</label>
                <select>
                    <option value="vazio">Selecione uma opção</option>
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino médio completo">Ensino médio completo</option>
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                    <option value="Ensino superior completo">Ensino superior completo</option>
                </select>
            </div>
         );
    }
}