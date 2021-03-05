import flightsAmadeusContentExtend from '../utils/flights/flights-amadeus-content-extend';
import { AmadeusType } from '../typings/flights-amadeus';

const amadeusData: { content: AmadeusType } = require('./amadeus.json');

const amadeusExtended = flightsAmadeusContentExtend(amadeusData.content);

export default amadeusExtended;
