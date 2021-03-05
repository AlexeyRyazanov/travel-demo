import GlobalVar from '../data/global-var';
import arrNotEmpty from './array/array-not-empty';

export default function consoleLogList(args: Array<any>): void {
   if (GlobalVar.logging && arrNotEmpty(args)) {
      console.log(
         args.map((el) => `

            Val of ${el} is ${el}`),
      );
      /* console.log(`

Method:  `, requestName[requestName.length - 1],
         `

Model:   `, model,
         `

Error:   `, response,
         `

`); */
   }
}
