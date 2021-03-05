// import IBasketState from '../typings/basket-models/IBasketState';

// export const BASKET_ADD_FLIGHT = 'BASKET_ADD_FLIGHT';
// export const BASKET_REMOVE_FLIGHT = 'BASKET_REMOVE_FLIGHT';

// export type BasketAddFlightPayload = {
//    id: string;
// };

// interface BasketAddFlightAction {
//    type: typeof BASKET_ADD_FLIGHT;
//    payload: BasketAddFlightPayload;
// }

// export type BasketRemoveFlightPayload = {
//    id: string;
// };

// interface BasketRemoveFlightAction {
//    type: typeof BASKET_REMOVE_FLIGHT;
//    payload: BasketRemoveFlightPayload;
// }

// export type BasketActionTypes = BasketAddFlightAction | BasketRemoveFlightAction;

// export function basketAddFlight(payload: BasketAddFlightPayload): BasketActionTypes {
//    return {
//       type: BASKET_ADD_FLIGHT,
//       payload
//    };
// }

// const init: IBasketState = {
//    agreed: false,
//    balance: 0,
//    productsFlights: {},
//    productsFlightsIds: [],
// };

// export default function basketReducer(state: IBasketState = init, action: BasketActionTypes): IBasketState {
//    switch (action.type) {
//       case BASKET_ADD_FLIGHT: {
//          const { id } = action.payload;

//          return {
//             ...state,
//             productsFlightsIds:
//                [
//                   ...state.productsFlightsIds,
//                   id
//                ]
//          };
//       }
//       case BASKET_REMOVE_FLIGHT: {
//          const { id } = action.payload;

//          return {
//             ...state,
//             productsFlightsIds: state.productsFlightsIds.filter(el => el !== id)
//          };
//       }

//       default: return state;
//    }
// }
