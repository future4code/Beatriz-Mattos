import { UserInputDTO, LoginInputDTO, User } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public async createUser(input: UserInputDTO) {

        if (!input.name || !input.email || !input.password || !input.role) {
            throw new InvalidParameterError("Missing input");
        }

        if (input.email.indexOf("@") === -1) {
            throw new InvalidParameterError("Invalid e-mail");
        }

        if (input.password.length < 6) {
            throw new InvalidParameterError("Invalid password");
        }

        const id = this.idGenerator.generate();

        const cryptedPassword = await this.hashManager.hash(input.password);

        await this.userDatabase.createUser(id, input.email, input.name, cryptedPassword, input.role);

        const accessToken = this.authenticator.generateToken({
            id,
            role: input.role,
        });
        return accessToken;
    }

    async getUserByEmail(user: LoginInputDTO) {

        const userFromDB = await this.userDatabase.getUserByEmail(user.email);

        const hashCompare = await this.hashManager.compare(user.password, userFromDB.getPassword());

        const accessToken = this.authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    };
};