import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import App from "./App";

describe('Renderização inicial', () => {
    test('Input existe na tela', () => {
        const { getByPlaceholderText } = render(<App />);

        const input = getByPlaceholderText('Novo post');
        expect(input).toBeInTheDocument();
    });
})

test("O usuário deve poder criar um post", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    
    const input = getByPlaceholderText('Novo post');
    fireEvent.change(input, {
        target: {
            value: 'teste'
        }
    });

    expect(input).toHaveValue('teste');

    const addButton = getByText('Adicionar');
    fireEvent.click(addButton);

})

test("O usuário deve poder curtir e descurtir um post", () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    const input = getByPlaceholderText('Novo post');
    fireEvent.change(input, {
        target: {
            value: 'teste'
        }
    });

    const addButton = getByText('Adicionar');
    fireEvent.click(addButton);

    const likeButton = getByText('Curtir');
    fireEvent.click(likeButton);

    const dislikeButton = getByText('Descurtir');
    fireEvent.click(dislikeButton);

})

test("O usuário deve poder apagar um post", () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    const input = getByPlaceholderText('Novo post');
    fireEvent.change(input, {
        target: {
            value: 'teste'
        }
    });

    const addButton = getByText('Adicionar');
    fireEvent.click(addButton);

    const deleteButton = getByText('Apagar');
    fireEvent.click(deleteButton);
})