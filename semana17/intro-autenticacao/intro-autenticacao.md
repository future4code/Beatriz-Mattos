## Exercício 1

a) Sim. Usar uma string como id abre mais as opções de chaves, já que podemos usar letras, símbolos e números.

b) Na pasta *service/*
```
import { v4 } from "uuid";

export class IdGenerator {
  public generate(): string {
    return v4();
  }
}
```

_____________________________________________________________________________________

## Exercício 2

a) Através do knex, o código faz uma conexão com os dados da tabela User, criada no banco de dados.

b)
```
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c)
```
export class UserDatabase {
    private static TABLE_NAME = "User";

    public async createUser(
        id: string,
        email: string,
        password: string
    ): Promise<void> {
        await db()
            .insert({
                id,
                email,
                password,
            })
            .into(UserDatabase.TABLE_NAME);
    }
}
```

_____________________________________________________________________________________

## Exercício 3

a) A linha "as string" define o recebido do JWT_KEY como string.

b)
```
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
```

_____________________________________________________________________________________
