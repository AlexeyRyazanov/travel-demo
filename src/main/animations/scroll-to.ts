import gsap from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';

gsap.registerPlugin(scrollTo);

export default function scrollToEl(el: string): void {
   gsap.to(window, {
      duration: 0.4,
      scrollTo:el,
      ease: 'power3.out'
   });
}
