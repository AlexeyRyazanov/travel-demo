import {
   createContext, ReactNode, useContext, useReducer,
} from 'react';
import { BayanStateType } from './typings/bayan-type';

export const bayanAnimDuration = 0.6;

export const SET_HEIGHTS = 'SET_HEIGHTS';
export const RESET_HEIGHTS = 'RESET_HEIGHTS';

type SetHeightsAction = {
   type: typeof SET_HEIGHTS;
   payload: {
      bayanIndex: number;
      height: number;
   };
};

type ResetHeightsAction = {
   type: typeof RESET_HEIGHTS;
};

export type BayanActionType = SetHeightsAction | ResetHeightsAction;
export type BayanDispatchType = (action: BayanActionType) => void;

export type BayanType = {
   l0: number;
   l1?: number;
   l2?: number;
};

function bayanStateInit(id: string): BayanStateType {
   return {
      id,
      selectedIndex: null,
      heights: null,
   };
}

function bayanReducer(state: BayanStateType, action: BayanActionType): BayanStateType {

   if (typeof state === 'undefined') {
      return undefined;
   }

   switch (action.type) {
      case SET_HEIGHTS: {
         const { heights, id } = state;
         const { bayanIndex, height } = action.payload;

         let heightNew = 0;

         if (heights !== null && typeof heights[bayanIndex] === 'number') {
            heightNew = heights[bayanIndex];
         }

         if (height !== 0) {
            heightNew += height;
         } else {
            heightNew = 0;
         }

         // console.table({ heightNew, state, payload: action.payload });
         // console.log(state);

         // console.log('SET_HEIGHTS', {
         //    ...state,
         //    heights: {
         //       ...heights,
         //       [bayanIndex]: heightNew > 0 ? heightNew : 0
         //    },
         //    selectedIndex: bayanIndex
         // });

         return {
            ...state,
            heights: {
               ...heights,
               [bayanIndex]: heightNew > 0 ? heightNew : 0,
            },
            selectedIndex: bayanIndex,
         };
      }

      case RESET_HEIGHTS: {
         return {
            ...state,
            selectedIndex: null,
            heights: null,
         };
      }

      default: return state;
   }
}

export type ProviderProps = {
   children: ReactNode;
   id?: string;
};

const BayanContextL0 = createContext<BayanStateType | undefined>(undefined);
const BayanDispatchContextL0 = createContext<BayanDispatchType | undefined>(undefined);

export function BayanProviderL0({ children, id }: ProviderProps): JSX.Element {
   const [state, dispatch] = useReducer(bayanReducer, /* Object.create(null, {}) */ bayanStateInit(id));

   return (
      <BayanContextL0.Provider value={state}>
         <BayanDispatchContextL0.Provider value={dispatch}>
            {children}
         </BayanDispatchContextL0.Provider>
      </BayanContextL0.Provider>
   );
}

export function useBayanStateL0(): BayanStateType {
   const context = useContext(BayanContextL0);

   if (context === undefined) {
      throw new Error('useBayanStateL0 must be used within a BayanProviderL0');
   }

   return context;
}

export function useBayanDispatchL0(): BayanDispatchType {
   const context = useContext(BayanDispatchContextL0);

   if (context === undefined) {
      throw new Error('useBayanDispatchL0 must be used within BayanProviderL0');
   }

   return context;
}

const BayanContextL1 = createContext<BayanStateType | undefined>(undefined);
const BayanDispatchContextL1 = createContext<BayanDispatchType | undefined>(undefined);

export function BayanProviderL1({ children, id }: ProviderProps): JSX.Element {
   const [state, dispatch] = useReducer(bayanReducer, /* Object.create(null, {}) */ bayanStateInit(id));

   return (
      <BayanContextL1.Provider value={state}>
         <BayanDispatchContextL1.Provider value={dispatch}>
            {children}
         </BayanDispatchContextL1.Provider>
      </BayanContextL1.Provider>
   );
}

export function useBayanStateL1(): BayanStateType {
   const context = useContext(BayanContextL1);

   if (context === undefined) {
      throw new Error('useBayanStateL1 must be used within a BayanProviderL1');
   }

   return context;
}

export function useBayanDispatchL1(): BayanDispatchType {
   const context = useContext(BayanDispatchContextL1);

   if (context === undefined) {
      throw new Error('useBayanDispatchL1 must be used within BayanProviderL1');
   }

   return context;
}

const BayanContextL2 = createContext<BayanStateType | undefined>(undefined);
const BayanDispatchContextL2 = createContext<BayanDispatchType | undefined>(undefined);

export function BayanProviderL2({ children, id }: ProviderProps): JSX.Element {
   const [state, dispatch] = useReducer(bayanReducer, /* Object.create(null, {}) */ bayanStateInit(id));

   return (
      <BayanContextL2.Provider value={state}>
         <BayanDispatchContextL2.Provider value={dispatch}>
            {children}
         </BayanDispatchContextL2.Provider>
      </BayanContextL2.Provider>
   );
}

export function useBayanStateL2(): BayanStateType {
   const context = useContext(BayanContextL2);

   if (context === undefined) {
      throw new Error('useBayanStateL2 must be used within a BayanProviderL2');
   }

   return context;
}

export function useBayanDispatchL2(): BayanDispatchType {
   const context = useContext(BayanDispatchContextL2);

   if (context === undefined) {
      throw new Error('useBayanDispatchL2 must be used within BayanProviderL2');
   }

   return context;
}
