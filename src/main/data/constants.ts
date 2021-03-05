import {
   format, addWeeks, addDays, subDays,
} from 'date-fns';
import getBdFromAge from '../utils/date/bg-from-age';
import RadioGroupOptionType from '../typings/radio-group-option';

export const urlWebApi = 'https://devapi.unicorn.ru';
export const copyrightLabel = 'Alexey Ryazanov D-Mind';
export const loggingDefault = true;
export const dateFormat = 'yyyy-MM-dd\'T00:00:00\'';
export const dateViewDMY = 'dd.MM.yyyy';
export const dateViewDM = 'dd.MM';
export const geoIdAntalya = '90970';
export const rateEUR = 69.7;
export const panoAnimDur = 400;
// export const panoAnimDur = 10;
export const fi = 1.618;
export const slideShowDealay = 10000;
export const placeholderCharDef = '-';
export const googleMapApiKey = 'AIzaSyDqSDQKjFss1wrE2fSIvGgNhNqTFqTDAIg';
export const isClient = typeof window === 'object';
export const timeRangeSplitter = '-';

export type RowsType = 12 | 24 | 48;
export const searchRows: RowsType[] = [12, 24, 48];
export const rowsDef: RowsType = 12;

export const minYearDefault = 1899;
export const maxYearDefault = 2200;

export const yearsRange = {
   minYear: minYearDefault,
   maxYear: maxYearDefault,
};

export const enum DatepickerView {
   days = 'days',
   months = 'months',
   years = 'years',
}

export const mapOptions = {
   mapTypeControl: true,
   mapTypeControlOptions: {
      position: 1,
   },
   streetViewControl: true,
   streetViewControlOptions: {
      position: 0,
   },
   fullscreenControl: true,
   fullscreenControlOptions: {
      position: 9,
   },
   zoomControlOptions: {
      position: 8,
   },
};

export const adultMinAge = 12;
export const adultMinBd = getBdFromAge(adultMinAge);
export const adultMinBdPrecise = subDays(getBdFromAge(adultMinAge), 1);

export const adultAvgAge = 30;
export const adultAvgBd = getBdFromAge(adultAvgAge);

export const adultMaxAge = 120;
export const adultMaxBd = getBdFromAge(adultMaxAge);

// TODO Improve childrenMaxAge using 11.99 value for it

export const childrenMinAge = 0;
export const childrenMaxAge = 11;

export const childAvgAge = 9;
export const childAvgBd = getBdFromAge(childAvgAge);

export const childrenMinBd = getBdFromAge(childrenMinAge);
export const childrenMaxBd = getBdFromAge(childrenMaxAge);
export const childrenMinBdPrecise = addDays(getBdFromAge(childrenMaxAge + 1), 1);

export const adultsMinCount = 1;
export const adultsMaxCount = 6;
export const childrenMinCount = 0;
export const childrenMaxCount = 4;

export const dateFormatPrecise = 'yyyy-MM-dd\'T\'HH\':\'mm\':00\'';
export const dateFormatHMS = 'yyyy-MM-dd\'T\'HH:mm:ss';

export const cInDef = format(addWeeks(new Date(), 1), dateFormat);
export const cOutDef = format(addWeeks(new Date(), 2), dateFormat);
export const nextDay = addDays(new Date(), 1);

export const genderOptions: Array<RadioGroupOptionType> = [
   {
      title: 'Муж.',
      value: 'M',
   },
   {
      title: 'Жен.',
      value: 'F',
   },
];
