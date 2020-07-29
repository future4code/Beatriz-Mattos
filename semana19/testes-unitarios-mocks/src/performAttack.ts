// import { Character, validateCharacter } from "./validateCharacter";

import { Character } from "./validateCharacter";

// export const performAttack = (attacker: Character, defender: Character) => {
//     if ( !validateCharacter(attacker) || !validateCharacter(defender)) {
//         throw new Error("Personagem inválido")
//     }

//     if (attacker.strength > defender.defense) {
//         defender.life -= attacker.strength - defender.defense;
//     }
// };

export const performAttack = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Personagem inválido");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
};