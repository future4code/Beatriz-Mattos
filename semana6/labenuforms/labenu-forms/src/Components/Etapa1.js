import React from 'react';


export default class Etapa1 extends React.Component {
    render() {
        return (
            <Form1>
                <div>
                    <h3>ETAPA 1 - DADOS GERAIS</h3>
                </div>

                <div>
                    <p>1. Qual é o seu nome?</p>
                    <input type="text" value=""></input>
                </div>

                <div>
                    <p>2. Qual sua idade?</p>
                    <input type="text" value=""></input>
                </div>

                <div>
                    <p>3. Qual seu e-mail?</p>
                    <input type="text" value=""></input>
                </div>

                <div>
                    <p>4. Qual a sua escolaridade?</p>
                    <select>
                        <option value="vazio">Selecione uma opção</option>
                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                        <option value="Ensino médio completo">Ensino médio completo</option>
                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                        <option value="Ensino superior completo">Ensino superior completo</option>
                    </select>
                </div>

            </Form1>
        )
    }
}

export default Etapa1;