import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
        id: Date.now(),
        texto: 'Texto da tarefa',
        completa: false
      }
    ],
      inputValue: '',
      filter: ''
    }

  componentDidUpdate() {
    const novaTarefa = this.state;
    localStorage.setItem("tarefa", JSON.stringify(novaTarefa));

    const tarefaString = localStorage.getItem("tarefa");
    const tarefaObject = JSON.parse(tarefaString);
    console.log(tarefaObject);
  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value});
  }

  criaTarefa = () => {
    // this.setState({tarefas: this.state.tarefas +1})
  }

  selectTarefa = (id) => {

  }

  onChangeFilter = (event) => {
    this.setState({filter: event.target.value});
  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
