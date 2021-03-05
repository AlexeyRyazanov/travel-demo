import wordsCount from '../words-count';

export default function validateWordsLength(v: string, maxWords: number): string | null {
   if (wordsCount(v) > maxWords) {
      return `макс. кол-во слов - ${maxWords}`;
   }

   return null;
}
