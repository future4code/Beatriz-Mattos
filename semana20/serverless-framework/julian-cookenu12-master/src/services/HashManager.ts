import * as bcrypt from "bcryptjs";

/* Classe responsável por encriptar a senha do usuário p/ guardar no banco */
export default class HashManager {
    public async hash(text: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        
        const cipherText = await bcrypt.hash(text, salt);

        return cipherText;
    }

    /* Quando o usuário faz login, comparamos o hash do banco com a senha inserida */
    public async compare(text: string, cipherText: string): Promise<boolean> {
        const result = await bcrypt.compare(text, cipherText)

        return result
    }
}