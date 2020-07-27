import { verifyAge, User, NACIONALITY, Casino, LOCATION } from "../src/verifyAge";

describe("verifyAge", () => {
    test("deve testar um usuário brasileiro que possa entrar em um estabelecimento no Brasil", () => {
        const user: User = {
            name: "Ratinho",
            age: 64,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const casino: Casino = {
            name: "Cassino BR",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(casino, [user]);
        expect(result.brazilians.allowed).toEqual(["Ratinho"]);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        expect(result.brazilians.allowed.length).toBeLessThan(2);
    });

    test("deve testar um usuário americano(estadunidense) que possa entrar em um estabelecimento no Brasil", () => {
        const user: User = {
            name: "Britney",
            age: 38,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino = {
            name: "Cassino BR",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(casino, [user]);
        expect(result.americans.allowed).toEqual(["Britney"]);
        expect(result.americans.unallowed.length).toBe(0);
    });

    //a corrigir:
    // test("Entrada negada - dois brasileiros e dois estadunidenses barrados no cassino do EUA por serem menores", () => {
    //     const users: User[] = [
    //         {
    //             name: "João",
    //             age: 19,
    //             nacionality: NACIONALITY.BRAZILIAN
    //         },
    //         {
    //             name: "Maria",
    //             age: 19,
    //             nacionality: NACIONALITY.BRAZILIAN
    //         },
    //         {
    //             name: "John",
    //             age: 19,
    //             nacionality: NACIONALITY.AMERICAN
    //         },
    //         {
    //             name: "Lucy",
    //             age: 19,
    //             nacionality: NACIONALITY.AMERICAN
    //         }
    //     ]

    //     const casino: Casino = {
    //         name: "Casino EUA",
    //         location: LOCATION.EUA
    //     };

    //     const result = verifyAge(casino, users);

    //     expect(result).toEqual({
    //         brazilians: {
    //             allowed: [], 
    //             unallowed: ["João", "Maria"]
    //         },
    //         americans: {
    //             allowed: [],
    //             unallowed: ["John", "Lucy"]
    //         }
    //     });
    // });

    //a corrigir:
    // test("2 brasileiros de 19 foram barrados e 2 estadunidenses de 21 entraram no cassino do EUA", () => {
    //     const brazilian: User = {
    //         name: "Maria",
    //         age: 19,
    //         nacionality: NACIONALITY.BRAZILIAN
    //     };

    //     const american: User = {
    //         name: "Mary",
    //         age: 21,
    //         nacionality: NACIONALITY.AMERICAN
    //     };

    //     const casino: Casino = {
    //         name: "Casino EUA",
    //         location: LOCATION.EUA
    //     };

    //     const result = verifyAge(casino, [
    //         brazilian, brazilian,
    //         american, american
    //     ]);

    //     expect(result.brazilians.unallowed).toEqual(["Maria", "Maria"]);
    //     expect(result.americans.allowed).toEqual(["Mary", "Mary"]);
    // });
});