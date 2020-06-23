export function checaPalindromo(frase) {
  return (
    frase ===
    frase
      .trim("")
      .split("")
      .reverse()
      .join("")
  );
}
