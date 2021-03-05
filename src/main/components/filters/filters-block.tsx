import {
   ReactNode, useRef, useReducer, useEffect, memo, useCallback,
} from 'react';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';
import { useBayanDispatchL0, SET_HEIGHTS } from '../bayan/bayan-provider';
import DictKeys from '../../data/dict-keys';
import FiltersBlockBody from './filters-block-body';
import FiltersBlockHead from './filters-block-head';
import FiltersKeys from '../../data/filters-keys';
import useBayanAnimationL0 from '../bayan/hooks/use-bayan-animation-l0';

type Props = {
   dictKey?: DictKeys;
   fKey: FiltersKeys;
   icon?: ReactNode;
   title: string;
   // itemsLength: number;
   bayanIndex: number;
   labelGet?: (id: string) => string;
   clsBody?: string;
};

export default memo(function FiltersBlock({
   dictKey,
   fKey,
   icon,
   labelGet,
   title = '',
   // itemsLength,
   bayanIndex,
   clsBody,
}: Props): JSX.Element {

   // const [opened, setOpened] = useState(/* props.active ||  */false);
   const [opened, dispatch] = useReducer((v) => !v, false);
   const contentRef = useRef<HTMLDivElement>(null);
   const duration = 0.6;

   const bayanDispatch = useBayanDispatchL0();
   // const bayanRef = useRef<HTMLDivElement>(null);
   const bayanRef = useBayanAnimationL0({ bayanIndex, delayDef: 0.01 });

   useEffect(() => {
      if (contentRef.current) {
         const contentHeight = contentRef.current.getBoundingClientRect().height;

         bayanDispatch({
            type: SET_HEIGHTS,
            payload: {
               bayanIndex,
               height: opened ? contentHeight : -contentHeight,
            },
         });
      }
   }, [bayanDispatch, bayanIndex, opened]);

   const anim = useCallback((node: HTMLElement, done: () => void) => {
      if (contentRef.current) {
         if (opened) {
            gsap.fromTo(contentRef.current.children,
               {
                  autoAlpha: 0,
                  x: 20,
               },
               {
                  duration,
                  autoAlpha: 1,
                  x: 0,
                  ease: 'expo.out',
                  stagger: 0.02,
               });
         } else {
            gsap.to(contentRef.current.children, {
               duration,
               x: 10,
               opacity: 0,
               ease: 'expo.out',
               onComplete: done,
            });
         }
      }
   }, [opened]);

   return (
      <div className="relative col usn" ref={bayanRef}>
         <FiltersBlockHead
            fKey={fKey}
            icon={icon}
            // loading={loading}
            opened={opened}
            title={title}
            toggleOpen={dispatch}
         />
         <Transition<undefined>
            in={opened}
            appear
            mountOnEnter
            unmountOnExit
            addEndListener={anim}
         >
            <div className="absolute fill b_0 t_100p z0">
               <div ref={contentRef} className={`px_-1 py_-2 ${clsBody || ''}`}>
                  <FiltersBlockBody
                     dictKey={dictKey}
                     fKey={fKey}
                     labelGet={labelGet}
                  />
                  {/* <Button /> */}
               </div>
            </div>
         </Transition>
         <div className="h_2px bg_240" />
      </div>
   );
});
