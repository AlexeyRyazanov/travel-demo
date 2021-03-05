export default function notificationTypeGetIconLabel(type: 'error' | 'success' | null): {
   bgcolor: string;
   icon: string;
   message: string;
} {
   switch (type) {
      case 'success': return {
         bgcolor: 'bg_main',
         icon: 'smileW',
         message: 'Отлично!',
      };
      case 'error': return {
         bgcolor: 'bg_red',
         icon: 'attentionW',
         message: 'Ошибка!',
      };
      default: return {
         bgcolor: 'bg_150',
         icon: 'infoW',
         message: 'Уведомление',
      };
   }
}
