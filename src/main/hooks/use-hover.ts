import { useState } from 'react';

type BinderType = {
   onMouseEnter(): void;
   onMouseLeave(): void;
};

export default function useHover(): { hovered: boolean; binder: BinderType } {
   const [hovered, set] = useState(false);

   const binder = {
      onMouseEnter: () => set(true),
      onMouseLeave: () => set(false),
   };

   return { hovered, binder };
}
