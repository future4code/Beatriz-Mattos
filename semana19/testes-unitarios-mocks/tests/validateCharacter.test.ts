import { Character, validateCharacter } from "../src/validateCharacter";

describe("validateCharacter", () => {
    test("Deve retornar false se o nome estiver vazio", () => {
        const character: Character = {
            name: "",
            life: 1500,
            defense: 500,
            strength: 300
        }

        const result = validateCharacter(character)

        expect(result).toBe(false);
    });

    test("Deve retornar true se a vida for zerada", () => {
        const character: Character = {
            name: "Chun-Li",
            life: 0,
            defense: 300,
            strength: 500
        }

        const result = validateCharacter(character)

        expect(result).toBe(true);
    });

    test("Deve retornar true se a força for zerada", () => {
        const character: Character = {
            name: "Ryu",
            life: 700,
            defense: 300,
            strength: 0
        }

        const result = validateCharacter(character)

        expect(result).toBe(true);
    });

    test("Deve retornar true se a defesa for zerada", () => {
        const character: Character = {
            name: "Blanka",
            life: 700,
            defense: 0,
            strength: 330
        }

        const result = validateCharacter(character)

        expect(result).toBe(true);
    });

    test("Deve retornar false se na vida houver um valor negativo", () => {
        const character: Character = {
            name: "Sagat",
            life: -700,
            defense: 100,
            strength: 330
        }
    
        const result = validateCharacter(character)
    
        expect(result).toBe(false);
    });

    test("Deve retornar false se na força houver um valor negativo", () => {
        const character: Character = {
            name: "Dhalsim",
            life: 700,
            defense: 100,
            strength: -330
        }
    
        const result = validateCharacter(character)
    
        expect(result).toBe(false);
    });

    test("Deve retornar true para todos os inputs válidos", () => {
        const character: Character = {
            name: "Zangief",
            life: 200,
            defense: 300,
            strength: 330
        }
    
        const result = validateCharacter(character)
    
        expect(result).toBe(true);
    });

});