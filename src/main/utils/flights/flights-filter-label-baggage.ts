export default function flightsFilterLabelBaggage(id: string): string {
   switch (id) {
      case '0': return 'Без багажа';
      case '1': return 'С багажом';
      default: return id;
   }
}
