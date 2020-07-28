import { Character } from "../src/validateCharacter";
import { performAttack } from "../src/performAttack";

describe("performAttack", () => {

    test("Deve performar o ataque", () => {
        const validatorMock = jest.fn(() => {
            return true
        });

        const attacker: Character = {
            name: "Luna",
            life: 1500,
            defense: 400,
            strength: 600
        };

        const defender: Character = {
            name: "Sarita",
            life: 1000,
            defense: 300,
            strength: 500
        };

        performAttack(attacker, defender, validatorMock as any);

        expect(defender.life).toEqual(700);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);

    });

    test("Deve retornar erro de caractere inválido", () => {

        expect.assertions(4);
        const validatorMock = jest.fn(() => {
            return false;
        });

        const attacker: Character = {
            name: "Xuxa",
            life: 1500,
            defense: 200,
            strength: 600,
        };

        const defender: Character = {
            name: "Carla Perez",
            life: 1500,
            defense: 400,
            strength: 800,
        };

        try {
            performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
            expect(err.message).toBe("Personagem inválido");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }

    });

});

// Faça um teste com um dos personagens com alguma informação inválida.
// Verifique a mensagem de erro.
// Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada,
// o que ela retornou e quantas vezes ela retornou. 