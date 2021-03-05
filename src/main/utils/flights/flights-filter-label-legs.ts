export default function flightsFilterLabelLegs(id: string): string {
   switch (id) {
      case '1': return 'Прямой рейс';
      case '2': return '1 пересадка';
      case '3': return '2 пересадки';
      case '4': return '3 пересадки';
      default: return id;
   }
}
