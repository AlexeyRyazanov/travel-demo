export default function flightsFilterLabelCancel(id: string): string {
   switch (id) {
      case '0': return 'Возвратный билет';
      case '1': return 'Невозвратный билет';
      default: return id;
   }
}
