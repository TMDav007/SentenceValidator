// The following program contains code that validates a sentence for certain rules below
// String starts with a capital letter.
// String has an even number of quotation marks.
// String ends with one of the following sentence termination characters: ".", "?", "!"
// String has no period characters other than the last character.
// Numbers below 13 are spelled out (”one”, “two”, "three”, etc…).
// Each rules is divided into function namely periodCheck, firstCharacterCheck, numberBelowThirteenCheck,lastCharacterCheck and doubleQuoteCheck
// All the functions are combined into a single function that check for all the rule stipulated.

/**
 * Valid Sentences:
 *  The quick brown fox said “hello Mr lazy dog”.
 *  The quick brown fox said hello Mr lazy dog.
 *  One lazy dog is too few, 13 is too many.
 *  One lazy dog is too few, thirteen is too many.
 *  How many "lazy dogs" are there?
 */

/**
 *
 * Invalid Sentences :
 *  The quick brown fox said "hello Mr. lazy dog".
 *  the quick brown fox said “hello Mr lazy dog".
 *  "The quick brown fox said “hello Mr lazy dog."
 *  One lazy dog is too few, 12 is too many.
 *  Are there 11, 12, or 13 lazy dogs?
 *  There is no punctuation in this sentence
 */

/**
 * Function that combines all functions to validates a sentence
 *
 * @param  {String} sentence Words combined to form a sentence
 * @return {Array}          Errors in array
 *
 */
export function validateSentence(sentence) {
  let errors = [];
  const firstCharResult = firstCharacterCheck(sentence);
  firstCharResult && errors.push(firstCharResult);
  const lastCharResult = lastCharacterCheck(sentence);
  lastCharResult && errors.push(lastCharResult);
  const doubleQuoteResult = doubleQuoteCheck(sentence);
  doubleQuoteResult && errors.push(doubleQuoteResult);
  const periodResult = periodCheck(sentence);
  periodResult && errors.push(periodResult);
  const numberBelowThirteenResult = numberBelowThirteenCheck(sentence);
  numberBelowThirteenResult && errors.push(numberBelowThirteenResult);

  return errors;
}

/**
 * Function that check if a period exist in a sentence
 *
 * @param  {String} sentence Words combined to form a sentence
 * @return {String}          Error
 *
 */

export function periodCheck(sentence) {
  if (!sentence) {
    return "";
  }
  const lastLetterInSentence = sentence.slice(-1);
  const PeriodPattern = /\./g;
  const periodInSentence = sentence.match(PeriodPattern);
  const errorMessage = "Period (.) can only be at end of the sentence";
  const isPeriodLastCharacterInSentence =
    sentence.indexOf(lastLetterInSentence) !==
    sentence.indexOf(periodInSentence);
  if (periodInSentence) {
    return isPeriodLastCharacterInSentence ? errorMessage : "";
  }
  return "";
}

/**
 * Function that check for the first character of a sentence
 *
 * @param  {String} sentence Words combined to form a sentence
 * @return {String}          Error
 *
 */

export function firstCharacterCheck(sentence) {
  if (!sentence) {
    return "";
  }

  const pattern = /^[A-Z]/g;
  const matchFirstCharacter = sentence.match(pattern);
  const errorMessage = "Sentence must begin with a Capital Letter";

  return matchFirstCharacter ? "" : errorMessage;
}

/**
 * Function that check if a number below 13 is spelt out in a Sentence
 *
 * @param  {String} sentence Words combined to form a sentence
 * @return {String}          Error
 *
 */

export function numberBelowThirteenCheck(sentence) {
  const isNumberInSentence = sentence.match(/\d/g);
  if (!isNumberInSentence) {
    return "";
  }
  const numberPatternAboveThirteen = /\d{3,}|([1-9][3-9])/g;
  const numberPatternBelowThirteen = /([1][1-2])|\d{1}/g;
  const matchNumberAboveThirteen = sentence.match(numberPatternAboveThirteen);
  const numberBelowThirteen = sentence.match(numberPatternBelowThirteen);

  const numbersAboveThirteen = matchNumberAboveThirteen
    ?.join("")
    .split("").length;
  const errorMessage =
    "Numbers below 13 in the sentence must be spelt out in words";

  if (numberBelowThirteen.length !== numbersAboveThirteen) {
    return errorMessage;
  }
  return "";
}

/**
 * Function that check that the last character in the sentence is valid i.e ends with '.', '?' or '!'
 *
 * @param  {String} sentence Words combined to form a sentence
 * @return {String}          Error
 *
 */
export function lastCharacterCheck(sentence) {
  let result = "";
  if (!sentence) {
    return "";
  }

  const lastCharacter = sentence.slice(-1);
  // eslint-disable-next-line
  const lastCharacterPattern = /\.|\?|\!/g;
  const matchingLastCharacterInSentence =
    lastCharacter.match(lastCharacterPattern);
  const errorMessage = "Sentence must end with '.' '?' or '!'";

  result = matchingLastCharacterInSentence ? "" : errorMessage;
  return result;
}

/**
 * Function that ensures quote tags are closed or escaped
 *
 * @param  {String} sentence Words combined to form a sentence
 * @return {String}          Error
 *
 */
export function doubleQuoteCheck(sentence) {
  if (!sentence) {
    return "";
  }
  const doubleQuotePattern = /"|“|“|”/g;
  const matchingDoubleQuoteInSentence = sentence.match(doubleQuotePattern);
  let errorMessage = "All opened quote tags in the sentence must be a closed";
  if (matchingDoubleQuoteInSentence) {
    const doubleQuoteLength = matchingDoubleQuoteInSentence
      .join(" ")
      .split(" ").length;

    const doubleQuoteLengthIsEven = doubleQuoteLength % 2 === 0;
    const result = doubleQuoteLengthIsEven ? "" : errorMessage;
    return result;
  }

  return "";
}

/**
 * Function that check that quote tag are closed or escaped
 *
 * @param  {String} sentence Words combined to form a sentence
 * @return {String}          Error
 *
 */
export function emptinessCheck(sentence) {
  const sentenceLength = sentence.length;
  let result = "";
  const errorMessage = "Input is required";
  if (!sentenceLength) {
    result = errorMessage;
    return result;
  }
  return result;
}
