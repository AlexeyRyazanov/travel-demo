export default function flightsFilterLabelChange(id: string): string {
   switch (id) {
      case '0': return 'Билет можно поменять';
      case '1': return 'Билет без обмена';
      default: return id;
   }
}
