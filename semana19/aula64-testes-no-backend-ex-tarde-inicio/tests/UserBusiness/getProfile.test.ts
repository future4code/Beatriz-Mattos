import { InvalidParameterError } from "../../src/errors/InvalidParameterError";
import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../../src/model/User";

describe("Testing UserBusiness.getProfile", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    test("Should return a custom error message when user enters invalid token", async () => {
        try {

            const verify = jest.fn(() => {
                throw new InvalidParameterError("Missing token")
            });

            tokenGenerator = { verify };

            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            );

            await userBusiness.getProfile("invalid-token");

        } catch (err) {

            expect(err.errorCode).toBe(422);

            expect(err.message).toBe("Missing token");

        }
    });

    test("Should return a user profile", async () => {

        const verify = jest.fn(() => { id: "id" });

        tokenGenerator = { verify };

        const getUserById = jest.fn(
            (id: string) => new User("02", "Bia", "bia@email.com", "123456", stringToUserRole("ADMIN"))
        );

        userDatabase = { getUserById };

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        const user = await userBusiness.getUserById("id");

        expect(getUserById).toHaveBeenCalledWith("id");

        expect(user).toEqual({ id: "02", name: "Bia", email: "bia@email.com", role: UserRole.ADMIN });

    });
});