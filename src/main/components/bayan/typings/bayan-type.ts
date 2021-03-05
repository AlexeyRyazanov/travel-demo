export type BayanHeightsType = { [key: number]: number };

export type BayanStateType = {
   id?: string;
   selectedIndex: number | null;
   heights: BayanHeightsType | null;
};

export type BayanAnimationParentType = {
   bayanIndex: number;

   duration?: number;
   delayDef?: number;
   ease?: string;
};

export type BayanAnimationCssType = { bayanIndex: number; };

export type BayanAnimationNestedType = {
   bayanIndex: number;

   duration?: number;
   ease?: string;
};
