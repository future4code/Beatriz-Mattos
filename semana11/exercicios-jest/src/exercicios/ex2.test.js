import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna false para 'bia'", () => {
    const ehPalindromo = checaPalindromo("bia");
    expect(ehPalindromo).toEqual(false);
  })

  it("retorna true para 'socorram me subi no onibus em marrocos'", () => {
    const ehPalindromo = checaPalindromo("socorram me subi no onibus em marrocos");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'o lobo ama o bolo'", () => {
    const ehPalindromo = checaPalindromo("o lobo ama o bolo");
    expect(ehPalindromo).toEqual(true);
  })
});
