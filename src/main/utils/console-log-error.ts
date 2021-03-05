import GlobalVar from '../data/global-var';

export default function consoleLogError(url: string, model: any, response: any): void {
   if (GlobalVar.logging) {
      const requestName = url.split('/');
      console.log(`

Method:  `, requestName[requestName.length - 1],
      `

Model:   `, model,
      `

Error:   `, response,
      `


`);
   }
}
