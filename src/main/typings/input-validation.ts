type InputValidationType = {
   custom?: {
      fn: Function;
      params?: any;
   };
   maxChars?: number;
   maxWords?: number;
   minChars?: number;
   required?: boolean;
};

export default InputValidationType;
