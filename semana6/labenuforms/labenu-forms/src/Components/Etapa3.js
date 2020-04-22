import React from 'react';


export class Etapa3 extends React.Component {
    render() {
        return (
                <div className={'App'}>
                    <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                    <label>5. Por que você não terminou um curso de graduação?</label>
                    <input type="text" value={this.state.value} />
                </div>

                <div>
                    <label>6. Você fez algum curso complementar?</label>
                    <select>
                        <option value="vazio">Selecione uma opção</option>
                        <option value="Curso tecnico">Curso técnico</option>
                        <option value="Curso de ingles">Curso de inglês</option>
                    </select>
                </div>
            );
    }
}