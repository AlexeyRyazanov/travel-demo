export default function flightsFilterLabelTime(id: string): string {
   switch (id) {
      case '0-6': return 'Ночью (0:00 - 5:59)';
      case '6-12': return 'Утром (6:00 - 11:59)';
      case '12-18': return 'Днём (12:00 - 17:59)';
      case '18-24': return 'Вечером (18:00 - 23:59)';
      default: return id;
   }
}
