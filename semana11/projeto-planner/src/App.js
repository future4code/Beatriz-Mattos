import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import TaskForm from './components/TaskForm';
import PlannerDay from './components/PlannerDay'


const PlannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  padding: 30px;
`

function App() {
  const [tasks, setTasks] = useState([]);

useEffect(() => {
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/julian-beatriz')
       .then((response) => {
         setTasks(response.data)
       })
}, [])


  const filterTasksByDay = (day) => {
      return tasks.filter((task) => {
          return task.day === day
      })
  }

  return (

    <div>
      <TaskForm />

      <PlannerContainer>

        <PlannerDay dayName={'Domingo'} tasks={filterTasksByDay('domingo')} />
        <PlannerDay dayName={'Segunda'} tasks={filterTasksByDay('segunda')} />
        <PlannerDay dayName={'Terça'} tasks={filterTasksByDay('terca')} />
        <PlannerDay dayName={'Quarta'} tasks={filterTasksByDay('quarta')} />
        <PlannerDay dayName={'Quinta'} tasks={filterTasksByDay('quinta')} />
        <PlannerDay dayName={'Sexta'} tasks={filterTasksByDay('sexta')} />
        <PlannerDay dayName={'Sábado'} tasks={filterTasksByDay('sabado')} />
         
      </PlannerContainer>

    </div>

  );
}

export default App;


// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

// const PlannerContainer = styled.div`
//   background: url('https://apod.nasa.gov/apod/image/2006/LagoonCenter_HubbleGravinese_960.jpg');
//   background-size: cover;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const PlannerContent = styled.div`
//   width: 90vw;
//   height: 85vh;
//   border-radius: 30px 10px;
//   background: rgba(0, 0, 0, 0.5);
//   box-shadow: black 0.5em 0.5em 0.3em;
//   padding: 10px;
// `

// const NavContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: row;
//   align-items: center;
//   flex-wrap: wrap;
// `

// const Title = styled.div`
//   font-size: 200%;
//   display: flex;
//   justify-content: center;
//   font-weight: bolder;
//   font-family: roboto;
//   padding: 10px;
//   color: cadetblue;
// `

// const Input = styled.input`
//   opacity: 0.7;
//   border-radius: 15px;
//   border: none;
//   padding: 5px;
//   margin-right: 10px;

//   :hover {
//     opacity: 7;
//   }
// `

// const Button = styled.button`
//   border-radius: 15px;
//   border: none;
//   margin-left: 10px;
//   padding: 7px 15px;
//   background-color: grey;
//   opacity: 0.7;

//     :hover {
//       cursor: pointer;
//       opacity: 7;
//       background-color: cadetblue;
//     }
//   `

// const Select = styled.select`
//     padding: 4px;
//     border-radius: 15px;
//     opacity: 0.7;

//     :hover {
//       cursor: pointer;
//       opacity: 7;
//     }
// `

// const TaskContainer = styled.div`
//   flex-grow: 1;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   flex-wrap: wrap;
//   height: 70vh;
//   padding: 10px;
// `

// const TaskDay = styled.div`
//   //border-left: 1px dotted pink;
//   min-width: 130px;
//   min-height: 100%;
// `

// const Day = styled.h3`
//   display: flex;
//   justify-content: center;
//   color: gray;
//   letter-spacing: 2px;
// `

// const List = styled.li`
//   color: pink;
// `

// function App() {
//   const [task, setTask] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [select, setSelect] = useState('');
//   const [day, setDay] = useState([]);

  // const getTasks = () => {
  //   axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/:planner-julian-beatriz')
  //     .then((resp) => {
  //       setTask(resp.data)
  //     })
  //     .catch((err) => {
  //       window.alert('Tivemos um erro ao pegar sua tarefa. Tente novamente!')
  //     })
  // }

//   useEffect(() => {
//     getTasks()
//   }, [])

//   const onChangeInput = (e) => {
//     setInputValue(e.target.value)
//   }

//   const onChangeSelect = (e) => {
//     setSelect(e.target.value)
//   }

//   const createTask = () => {
//     const body = {
//       text: inputValue,
//       day: day
//     }

//     axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/:planner-julian-beatriz', body)
//     .then((resp) => {
//       window.alert('Tarefa adicionada com sucesso!')
//       getTasks()
//       setInputValue('')
//     })
//   }

//   const onSubmit = (e) => {
//     e.preventDefault();
//     createTask()
//   }

//   const selectTask = (id) => {
//     const newList = task.map((task) => {
//       if (task.id === id) {
//         return {
//           ...task,
//           complete: !task.complete
//         }
//       }
//       return task
//     })
//     setTask(newList)
//   }

//   const domingo = task.filter(task => {
//     if (task.day === 'domingo') {
//       return task
//     }
//   }).map(task => {
//     return (
//       <li>{task.text}</li>
//       ) 
//   })


//   return (
//     <PlannerContainer>

//       <PlannerContent>

//         <Title>Planner Semanal</Title>

//         <NavContainer>

//           <form onSubmit={onSubmit}>

//             <Input
//               type={'text'}
//               name={'text'}
//               value={inputValue}
//               onChange={onChangeInput}
//               placeholder={'Descreva sua tarefa'}
//               required
//             />

            // <Select value={'select'} onChange={onChangeSelect}>

            //   <option value={''}>Escolha o dia</option>
            //   <option value={'domingo'}>Domingo</option>
            //   <option value={'segunda'}>Segunda</option>
            //   <option value={'terca'}>Terça</option>
            //   <option value={'quarta'}>Quarta</option>
            //   <option value={'quinta'}>Quinta</option>
            //   <option value={'sexta'}>Sexta</option>
            //   <option value={'sabado'}>Sábado</option>

            // </Select>

//             <Button onClick={''}>Adicionar</Button>

//           </form>

//         </NavContainer>

//         <TaskContainer>

//           <TaskDay>
//             <Day>Domingo</Day>
//             <List>{domingo}</List>
//           </TaskDay>

//           <TaskDay>
//             <Day>Segunda</Day>
//             <List>1</List>
//           </TaskDay>

//           <TaskDay>
//             <Day>Terça</Day>
//             <List>2</List>
//           </TaskDay>

//           <TaskDay>
//             <Day>Quarta</Day>
//             <List>3</List>
//           </TaskDay>

//           <TaskDay>
//             <Day>Quinta</Day>
//             <List>4</List>
//           </TaskDay>

//           <TaskDay>
//             <Day>Sexta</Day>
//             <List>5</List>
//           </TaskDay>

//           <TaskDay>
//             <Day>Sábado</Day>
//             <List>6</List>
//           </TaskDay>

//         </TaskContainer>

//       </PlannerContent>

//     </PlannerContainer>
//   );
// }

// export default App;
