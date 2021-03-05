import { AmadeusType, SolutionType } from '../../typings/flights-amadeus';

export default function flightsAmadeusContentExtend(content: AmadeusType): AmadeusType {
   const keys = Object.keys(content.solutions);
   const solutionsEx = { ...content.solutions };

   for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];

      const solutionEx: SolutionType = {
         baggage: Math.random() > 0.5 ? '1' : '0',
         cancelPenalty: Math.random() > 0.5 ? 0.3 : 0,
         changePenalty: Math.random() > 0.5 ? 0.15 : 0,
      };

      solutionsEx[key] = {
         ...solutionsEx[key],
         ...solutionEx,
      };
   }

   return {
      ...content,
      solutions: {
         ...content.solutions,
         ...solutionsEx,
      },
      solutionsIds: keys,
   };
}
