export default function throttle(callback: Function, delay: number): any {
   let isThrottled = false;
   let args;
   let context;

   function wrapper(params) {
      if (isThrottled) {
         args = params;
         context = this;
         return;
      }

      isThrottled = true;
      callback.apply(this, params);

      setTimeout(() => {
         isThrottled = false;
         if (args) {
            wrapper.apply(context, args);
            // args = context = null;
            args = null;
            context = null;
         }
      }, delay);
   }

   return wrapper;
}

// export function throttleV1(func: Function, limit: number): Function {
// 	let inThrottle: boolean;

// 	return function(this: any): any {
// 		const args = arguments;
// 		const context = this;

// 		if (!inThrottle) {
// 			inThrottle = true;
// 			func.apply(context, args);
// 			setTimeout(() => (inThrottle = false), limit);
// 		}
// 	};
// }
