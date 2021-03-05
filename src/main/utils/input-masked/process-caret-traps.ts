export default function processCaretTraps(mask: Array<string | RegExp>): {
   maskWithoutCaretTraps: Array<string | RegExp>,
   indexes: Array<number>
} {
   const indexes = [];
   let indexOfCaretTrap: number;

   while (indexOfCaretTrap = mask.indexOf('[]'), indexOfCaretTrap !== -1) {
      indexes.push(indexOfCaretTrap);
      mask.splice(indexOfCaretTrap, 1);
   }

   return {
      maskWithoutCaretTraps: mask,
      indexes
   };
}
