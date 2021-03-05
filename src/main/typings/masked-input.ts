import { ChangeEvent } from 'react';

type MaskedInputType = {
   guide?: boolean;
   initialValue?: string;
   inputElement: any;
   keepCharPositions?: boolean;
   mask: Array<string | RegExp> | false | Function;
   onChange?(e: ChangeEvent<HTMLInputElement>): void;
   pipe?(conformedValue: string, config: { rawValue?: string }): { value: string; indexesOfPipedChars: Array<number> };
   placeholderChar?: string;
   showMask?: boolean;
};

export default MaskedInputType;
