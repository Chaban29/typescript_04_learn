/**
 * string
 * number
 * boolean
 * null
 * undefined
 * bigint
 * symbol
 */

const currentUserName: string = 'Roman';
const uniqSymbolId: symbol = Symbol('currentUserId');
let currentUserAge: number = 23;
let isProgrammer: boolean = true;
let empty: null = null;
let nothing: undefined = undefined;
let someBiggestNumber = 10000000000000000000000000n;
let showNotANumber: number = NaN;

// @ts-ignore
let isAdult = 18;

const checkCurrentUserAge = (isAdult: number): number | null => {
  if (isAdult >= currentUserAge) {
    return currentUserAge;
  } else {
    return null;
  }
};

const result = checkCurrentUserAge(isAdult) as unknown as boolean;


let petAge: number = 10;

let newPetAge = petAge as unknown as boolean;

newPetAge = true;