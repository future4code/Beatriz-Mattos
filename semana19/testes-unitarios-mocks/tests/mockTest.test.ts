test("Criando mock de sucesso que retorna true", () => {
    const validatorMock = jest.fn(() => {
        return true
    });
});

test("Criando mock de falha que retorna false", () => {
    const validatorMock = jest.fn(() => {
        return false
    });
});