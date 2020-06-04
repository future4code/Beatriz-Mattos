import React from 'react';
import styled from 'styled-components';
import InputStyle from '@material-ui/core/';

const PlannerContainer = styled.div`
  background: url('https://apod.nasa.gov/apod/image/2006/LagoonCenter_HubbleGravinese_960.jpg');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PlannerContent = styled.div`
  width: 90vw;
  height: 85vh;
  border-radius: 30px 10px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: black 0.5em 0.5em 0.3em;
  padding: 10px;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

const Title = styled.div`
  font-size: 200%;
  display: flex;
  justify-content: center;
  font-weight: bolder;
  font-family: roboto;
  padding: 10px;
  color: cadetblue;
`

const Input = styled.input`
  opacity: 0.7;
  border-radius: 15px;
  border: none;
  padding: 5px;
  margin-right: 10px;

  :hover {
    opacity: 7;
  }
`

const Button = styled.button`
  border-radius: 15px;
  border: none;
  margin-left: 10px;
  padding: 7px 15px;
  background-color: grey;
  opacity: 0.7;
    
    :hover {
      cursor: pointer;
      opacity: 7;
      background-color: cadetblue;
    }
  `
  
const Select = styled.select`
    padding: 4px;
    border-radius: 15px;
    opacity: 0.7;
    
    :hover {
      cursor: pointer;
      opacity: 7;
    }
`

const TaskContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 70vh;
  padding: 10px;
`

const TaskDay = styled.div`
  //border-left: 1px dotted pink;
  min-width: 130px;
  min-height: 100%;
`

const Day = styled.h3`
  display: flex;
  justify-content: center;
  color: gray;
  letter-spacing: 2px;
`

const List = styled.li`
  color: pink;
`
  
function App() {
  return (
    <PlannerContainer>

      <PlannerContent>

          <Title>Planner Semanal</Title>

        <NavContainer>

          <form onSubmit={''}>

            <Input
              type={'text'}
              name={'text'}
              value={''}
              onChange={''}
              placeholder={'Descreva sua tarefa'}
              required
            />

            <Select value={''} onChange={''}>

              <option value={''}>Escolha o dia</option>
              <option value={'domingo'}>Domingo</option>
              <option value={'segunda'}>Segunda</option>
              <option value={'terca'}>Terça</option>
              <option value={'quarta'}>Quarta</option>
              <option value={'quinta'}>Quinta</option>
              <option value={'sexta'}>Sexta</option>
              <option value={'sabado'}>Sábado</option>

            </Select>

            <Button onClick={''}>Adicionar</Button>

          </form>

        </NavContainer>

        <TaskContainer>

          <TaskDay>
            <Day>Domingo</Day>
              <List>oiii</List>
          </TaskDay>

          <TaskDay>
            <Day>Segunda</Day>
          </TaskDay>

          <TaskDay>
            <Day>Terça</Day>
          </TaskDay>

          <TaskDay>
            <Day>Quarta</Day>
          </TaskDay>

          <TaskDay>
            <Day>Quinta</Day>
          </TaskDay>

          <TaskDay>
            <Day>Sexta</Day>
          </TaskDay>

          <TaskDay>
            <Day>Sábado</Day>
          </TaskDay>

        </TaskContainer>

      </PlannerContent>

    </PlannerContainer>
  );
}

export default App;
