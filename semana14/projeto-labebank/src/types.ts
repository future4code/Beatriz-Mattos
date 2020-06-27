export type ExtractItem = {
    description: string;
    value: number;
    date: string;
}

export type Account = {
    name: string;
    birthDate: string;
    cpf: string;
    currentBalance: number;
    extract: ExtractItem[];
}