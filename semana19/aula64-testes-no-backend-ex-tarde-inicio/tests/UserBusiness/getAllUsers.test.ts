import { UserBusiness } from "../../src/business/UserBusiness";
import { UserRole, User, stringToUserRole } from "../../src/model/User";

describe("Testing UserBusiness.getAllUsers", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    test("Should return custom error message when user is NORMAL", async () => {

        try {

            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            );

            await userBusiness.getAllUsers(UserRole.NORMAL);

        } catch (err) {

            expect(err.errorCode).toBe(401);
            expect(err.message).toBe("You must be an admin to access this endpoint");

        }
    });

    test("Should return all registered users when user is ADMIN", async () => {

        const getAllUsers = jest.fn(() => [
            new User("01", "Natassja", "natassja@email.com", "123456", stringToUserRole("ADMIN")
            ),
        ]);

        userDatabase = { getAllUsers };

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        const result = await userBusiness.getAllUsers(UserRole.ADMIN);

        expect(getAllUsers).toHaveBeenCalledTimes(1);
        expect(result).toContainEqual({ id: "01", name: "Natassja", email: "natassja@email.com", role: UserRole.ADMIN });

    });
});