export default function M2HM(mins: number): string {
   const minsAbs = Math.abs(mins);
   const hours = Math.floor(minsAbs / 60);
   const hoursVal = hours < 10 ? `0${hours}` : hours;
   const restMins = minsAbs % 60;
   const restMinsVal = restMins < 10 ? `0${restMins}` : restMins;

   return `${hoursVal}ч ${restMinsVal}м`;
   return `${hoursVal > 0 ? `${hoursVal}ч ` : ''}${restMinsVal}м`;
}
