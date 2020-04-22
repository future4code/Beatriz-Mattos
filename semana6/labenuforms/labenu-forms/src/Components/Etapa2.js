import React from 'react';


export class Etapa2 extends React.Component {
    render() {
        return (
            <div className={'App'}>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            </div>

            <div>
                <label>5. Qual curso?</label>
                <input type="text" value={this.state.value} />
            </div>

            <div>
                <label>6. Qual a unidade de ensino?</label>
                <input type="text" value={this.state.value} />
            </div>
           );
    }
}