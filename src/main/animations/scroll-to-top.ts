import gsap from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';

gsap.registerPlugin(scrollTo);

export default function scrollToTop(): void {
   gsap.to(window, {
      duration: 0.3,
      scrollTo: {
         y: 0,
         autoKill: false,
      },
      ease: 'power3.out',
   });
}
