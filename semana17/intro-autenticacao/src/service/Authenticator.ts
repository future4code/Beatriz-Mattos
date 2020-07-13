import * as jwt from "jsonwebtoken";

export class Authenticator {
  private static EXPIRES_IN = "1min";
  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );
    return token;
  }
}

interface AuthenticationData {
  id: string;
}