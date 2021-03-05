export type PagingType = 'n' | 'p' | 'f' | 'l' | 's';

export default function pagingSetUtil(
   p: number,
   t: number,
   set: PagingType,
   page?: number,
): number {
   switch (set) {
      case 'n': if (p < t) { return p + 1; } break;
      case 'p': if (p > 1) { return p - 1; } break;
      case 'f': if (p > 1) { return 1; } break;
      case 'l': if (p < t) { return t; } break;
      case 's': if (page) { return page; } break;
      default: return p;
   }
   return null;
}

// p - number of current page
// t - total pages
// 'n' - next
// 'p' - prev
// 'f' - first
// 'l' - last
// 's' - set
