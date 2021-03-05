import emailPipe from './email-pipe';

const allWhitespaceRegExp = /\s/g;
const anyNonDotOrWhitespaceRegExp = /[^.\s]/;
const anyNonWhitespaceRegExp = /[^\s]/;
const asterisk = '*';
const atSymbol = '@';
const caretTrap = '[]';
const dot = '.';
const emptyString = '';
const g = 'g';
const space = ' ';

function emailMask(rawValue: string, config) {
   rawValue = rawValue.replace(allWhitespaceRegExp, emptyString);

   const { placeholderChar, currentCaretPosition } = config;
   const indexOfFirstAtSymbol = rawValue.indexOf(atSymbol);
   const indexOfLastDot = rawValue.lastIndexOf(dot);
   const indexOfTopLevelDomainDot = (indexOfLastDot < indexOfFirstAtSymbol) ? -1 : indexOfLastDot;

   let localPartToDomainConnector = getConnector(rawValue, indexOfFirstAtSymbol + 1, atSymbol);
   let domainNameToTopLevelDomainConnector = getConnector(rawValue, indexOfTopLevelDomainDot - 1, dot);

   let localPart = getLocalPart(rawValue, indexOfFirstAtSymbol, placeholderChar);
   let domainName = getDomainName(rawValue, indexOfFirstAtSymbol, indexOfTopLevelDomainDot, placeholderChar);
   let topLevelDomain = getTopLevelDomain(rawValue, indexOfTopLevelDomainDot, placeholderChar, currentCaretPosition);

   localPart = convertToMask(localPart);
   domainName = convertToMask(domainName);
   topLevelDomain = convertToMask(topLevelDomain, true);

   const mask = localPart
      .concat(localPartToDomainConnector)
      .concat(domainName)
      .concat(domainNameToTopLevelDomainConnector)
      .concat(topLevelDomain);

   return mask;
}

function getConnector(rawValue, indexOfConnection, connectionSymbol) {
   const connector = [];

   if (rawValue[indexOfConnection] === connectionSymbol) {
      connector.push(connectionSymbol);
   } else {
      connector.push(caretTrap, connectionSymbol);
   }

   connector.push(caretTrap);

   return connector;
}

function getLocalPart(rawValue: string, indexOfFirstAtSymbol?: number, placeholderChar?: string): string | Array<RegExp | string> {
   if (indexOfFirstAtSymbol === -1) {
      return rawValue;
   } else {
      return rawValue.slice(0, indexOfFirstAtSymbol);
   }
}

function getDomainName(rawValue: string, indexOfFirstAtSymbol?: number, indexOfTopLevelDomainDot?: number, placeholderChar?: string): string | Array<RegExp | string> {
   let domainName = emptyString;

   if (indexOfFirstAtSymbol !== -1) {
      if (indexOfTopLevelDomainDot === -1) {
         domainName = rawValue.slice(indexOfFirstAtSymbol + 1, rawValue.length);
      } else {
         domainName = rawValue.slice(indexOfFirstAtSymbol + 1, indexOfTopLevelDomainDot);
      }
   }

   domainName = domainName.replace(new RegExp(`[\\s${placeholderChar}]`, g), emptyString);

   if (domainName === atSymbol) {
      return asterisk;
   } else if (domainName.length < 1) {
      return space;
   } else if (domainName[domainName.length - 1] === dot) {
      return domainName.slice(0, domainName.length - 1);
   } else {
      return domainName;
   }
}

function getTopLevelDomain(rawValue: string, indexOfTopLevelDomainDot: number, placeholderChar: string, currentCaretPosition: number): string | Array<RegExp | string> {
   let topLevelDomain = emptyString;

   if (indexOfTopLevelDomainDot !== -1) {
      topLevelDomain = rawValue.slice(indexOfTopLevelDomainDot + 1, rawValue.length);
   }

   topLevelDomain = topLevelDomain.replace(new RegExp(`[\\s${placeholderChar}.]`, g), emptyString);

   if (topLevelDomain.length === 0) {
      return (rawValue[indexOfTopLevelDomainDot - 1] === dot && currentCaretPosition !== rawValue.length) ?
         asterisk :
         emptyString;
   } else {
      return topLevelDomain;
   }
}

function convertToMask(str: string | Array<string | RegExp>, noDots?: boolean): Array<string | RegExp> {
   if (typeof str === 'string') {
      return str
         .split(emptyString)
         .map((char) => char === space ? char : (noDots) ? anyNonDotOrWhitespaceRegExp : anyNonWhitespaceRegExp);
   }
}

export default { mask: emailMask, pipe: emailPipe };
