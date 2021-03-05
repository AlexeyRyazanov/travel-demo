export type CitiesType = { name: string };

export type AgentsType = {
   agent: string;
   price: number;
   pricePerPassenger: number;
};

export type AirlinesType = {
   name: string;
   imageURL: string;
};

export type AirportsType = {
   name: string;
   cityCode: string;
};

export type BoundType = {
   airlineCode: string;
   boundId: string;
   duration: number;
   legs: Array<string>;
};

export type LegType = {
   from: string; // "SVO"
   to: string; // "DUS"
   dateFrom: string; // "2020-04-10T07:35:00"
   dateTo: string; // "2020-04-10T09:55:00"
   duration: number; // 200
   dateAirline: string; // "SU"
   OA: string; // "SU"
   flightNumber: string; // "2536"
   aircraftType: string; // "320"
   terminalFrom: string; // "D"
   terminalTo: string;
};

export type SolutionType = {
   agents?: Array<AgentsType>;
   baggage?: '0' | '1';
   bound?: Array<BoundType>;
   cancelPenalty?: number;
   changePenalty?: number;
};

export type AmadeusType = {
   airlines: { [key: string]: AirlinesType };
   airports: { [key: string]: AirportsType };
   cities: { [key: string]: CitiesType };
   legs: { [key: string]: LegType };
   solutions: { [key: string]: SolutionType };
   solutionsIds: Array<string>;
};
