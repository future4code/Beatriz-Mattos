export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: UserRole
    ) {}

    public getId = () => this.id;
    public getName = () => this.name;
    public getEmail = () => this.email;
    public getPassword = () => this.password;
    public getRole = () => this.role;

    public setId = (id: string) => this.id = id;
    public setName = (name: string) => this.name = name;
    public setEmail = (email: string) => this.email = email;
    public setPassword = (password: string) => this.password = password;
    public setRole = (role: UserRole) => this.role = role;

    public static stringToUserRole(input: string): UserRole {
        switch (input) {
            case "NORMAL":
                return UserRole.NORMAL;
            case "ADMIN":
                return UserRole.ADMIN;
            default:
                throw new Error("Invalid user role");
        }
    };

    public static toUserModel(user: any): User {
        return new User(user.id, user.name, user.email, user.password, User.stringToUserRole(user.role));
    };
};

export interface UserInputDTO {
    email: string;
    password: string;
    name: string;
    role: string;
};

export interface LoginInputDTO {
    email: string;
    password: string;
};

export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
};