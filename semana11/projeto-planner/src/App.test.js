import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import userEvent from '@testing-library/user-event'

axios.get = jest.fn().mockResolvedValue({ data: [] })
axios.post = jest.fn().mockResolvedValue()

const createTask = () => {
  const utils = render(<App />)

  const input = utils.getByPlaceholderText('Descreva sua tarefa')

  fireEvent.change(input, {
    target: {
      value: 'tarefa teste'
    }
  })

  const button = utils.getByText(/Adicionar/)

  fireEvent.click(button)

  return utils
}

describe('Renderização inicial', () => {
  test('Renderiza tudo corretamente', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "text": 'tarefa requisição teste',
          "day": 'domingo'
        }
      ]
    })

    const {
      getByPlaceholderText,
      findByText,
      getByText
    } = render(<App />)

    const input = getByPlaceholderText('Descreva sua tarefa')
    expect(input).toBeInTheDocument()

    expect(getByText(/Adicionar/)).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalled()

    const task = await findByText('tarefa requisição teste')

    expect(task).toBeInTheDocument()
  })
})

describe('Criar uma tarefa', () => {
  test('Cria a tarefa com sucesso', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "text": 'tarefa requisição teste',
          "day": []
        }
      ]
    })

    axios.post = jest.fn().mockResolvedValue()

    const {
      getByPlaceholderText,
      getByText
    } = render(<App />)

    const input = getByPlaceholderText('Descreva sua tarefa')

    await userEvent.type(input, 'tarefa teste')

    expect(input).toHaveValue('tarefa teste')

    const button = getByText(/Adicionar/)
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/:planner-julian-beatriz', {
      text: 'tarefa teste',
      day: 'domingo'
    })

    await wait(() => expect(axios.get).toHaveBeenCalledTimes(2))
    await wait(() => expect(input).toHaveValue(''))
  })
})
