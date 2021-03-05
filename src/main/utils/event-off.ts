export default function off(obj: any, ...args: any[]) {
   obj.removeEventListener(...args);
}
