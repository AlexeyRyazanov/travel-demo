import {
   useState, useRef, ReactNode, PropsWithChildren, useCallback,
} from 'react';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';
import useClickAwayOpened from '../../hooks/use-click-away-opened';

type Props = {
   cls?: string;
   clsTooltip?: string;
   isDisabled?: boolean;
   message: string | ReactNode;
   position?: 'left' | 'right';
};

export default function Tooltip(props: PropsWithChildren<Props>): JSX.Element {
   const {
      children,
      cls,
      clsTooltip,
      isDisabled,
      message,
      position,
   } = props;

   const [opened, setOpened] = useState(false);
   const ref = useRef<HTMLDivElement>(null);
   const tooltipRef = useRef<HTMLDivElement>(null);

   const hOpen = () => setOpened(true);
   const hClose = () => setOpened(false);

   const hEnter = () => {
      if (!isDisabled) {
         hOpen();
      }
   };

   useClickAwayOpened(opened, ref, hClose);

   const openAnim = useCallback((node: HTMLElement, done: () => void) => {
      if (opened) {
         gsap.fromTo(node,
            {
               y: 10,
               scale: 0.9,
               autoAlpha: 0,
            },
            {
               y: 0,
               scale: 1,
               autoAlpha: 1,
               duration: 0.4,
               transformOrigin: position === 'left' ? '0% 100%' : '100% 100%',
               ease: 'expo.out',
            });
      } else {
         gsap.to(node, {
            duration: 0.3,
            y: 10,
            scale: 0.9,
            autoAlpha: 0,
            ease: 'expo.out',
            onComplete: done,
         });
      }
   }, [opened, position]);

   return (
      <div className={`relative ${isDisabled ? 'no-events' : ''} ${cls || ''}`} ref={ref} onMouseLeave={hClose}>
         {
            children
               ? <div className="cur_p" onMouseEnter={hEnter}>{children}</div>
               : <div className="info ai_c semibold" onMouseEnter={hEnter} />
         }
         <Transition<undefined>
            in={opened}
            appear
            mountOnEnter
            unmountOnExit
            addEndListener={openAnim}
         >
            <div className={`absolute will-change_t py_-2 z3 b_100p ${position === 'left' ? 'l_0' : 'r_0'}`} ref={tooltipRef}>
               <div className="fs_0875 px_-1 py_-2 br_2 bg_white boxsh_3">{message}</div>
            </div>
         </Transition>
      </div>
   );
}

Tooltip.defaultProps = {
   cls: '',
   clsTooltip: '',
   isDisabled: false,
   position: 'left',
};
