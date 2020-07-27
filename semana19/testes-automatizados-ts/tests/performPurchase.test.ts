import { performPurchase, User } from "../src/performPurchase";

describe("performPurchase", () => {
    test("deve testar o usuário com saldo maior que o valor da compra", () => {
        const user: User = {
            name: "Tim Maia",
            balance: 100
        }

        const output = performPurchase(user, 50)

        expect(output).toEqual({
            ...user,
            balance: 50
        })
    });

    test("deve testar o usuário com o saldo igual ao valor de compra", () => {
        const user: User = {
            name: "Fátima Bernardes",
            balance: 130
        }

        const output = performPurchase(user, 130)

        expect(output).toEqual({
            ...user,
            balance: 0
        })
    });

    test("deve testar o usuário com o saldo menor do que o valor de compra", () => {
        const user: User = {
            name: "Fausto Silva",
            balance: 70
        }

        const output = performPurchase(user, 150)

        expect(output).toEqual(undefined)
    });
});