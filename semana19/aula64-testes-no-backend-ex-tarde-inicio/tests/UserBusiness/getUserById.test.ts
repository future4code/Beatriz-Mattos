import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../../src/model/User";

describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    test("Should return 'User not found' when user doesn't exist", async () => {

        expect.assertions(2);

        try {

            const getUserById = jest.fn();

            userDatabase = { getUserById };

            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            );

            await userBusiness.getUserById("invalid-id");

        } catch (err) {

            expect(err.errorCode).toBe(404);
            expect(err.message).toBe("User not found");

        };
    });

    test("Should return a existent user", async () => {

        const getUserById = jest.fn(
            (id: string) => new User("01", "Natassja", "natassja@email.com", "123456", stringToUserRole("ADMIN"))
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
        expect(user).toEqual({ id: "01", name: "Natassja", email: "natassja@email.com", role: UserRole.ADMIN });

    });
});