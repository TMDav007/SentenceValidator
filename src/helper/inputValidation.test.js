import { doubleQuoteCheck, emptinessCheck, firstCharacterCheck, lastCharacterCheck, numberBelowThirteenCheck, periodCheck, validateSentence } from "./inputValidation";

  
  describe("Sentence Validation", () => {
    let sentence = "I am one of the test words.";
  
    it("return an no error", () => {
      let testResult = validateSentence(sentence);
      expect(testResult.length).toBe(0);
    });
  
    it("returns one error", () => {
      sentence = "I am one of the test words";
      let testResult = validateSentence(sentence);
      expect(testResult.length).toBe(1);
    });
  });
  
  describe("Check that period is not in between the sentence", () => {
    let sentence;
    it("returns an error", () => {
      sentence = "I am one of . the test words";
      let testResult = periodCheck(sentence);
      let expected = "Period (.) can only be at end of the sentence";
      expect(testResult).toBe(expected);
    });
  
    it("it return no error", () => {
      sentence = "I am one of the test words.";
      let testResult = periodCheck(sentence);
      let expected = "";
      expect(testResult).toBe(expected);
    });
  });
  
  describe("Check that the first Character is a uppercase", () => {
    let sentence;
    it("returns an error", () => {
      sentence = "i am testing the sentence";
      let testResult = firstCharacterCheck(sentence);
      let expected = "Sentence must begin with a Capital Letter";
      expect(testResult).toBe(expected);
    });
  
    it("it return no error", () => {
      sentence = "I am testing the sentence";
      let testResult = firstCharacterCheck(sentence);
      let expected = "";
      expect(testResult).toBe(expected);
    });
  });
  
  describe("Check that the first Character is a uppercase", () => {
    let sentence;
    it("returns an error", () => {
      sentence = "I am testing the number 1 error";
      let testResult = numberBelowThirteenCheck(sentence);
      let expected =
        "Numbers below 13 in the sentence must be spelt out in words";
      expect(testResult).toBe(expected);
    });
    it("it return no error", () => {
      sentence = "I am testing the number 13 error";
      let testResult = numberBelowThirteenCheck(sentence);
      let expected = "";
      expect(testResult).toBe(expected);
    });
  });
  
  describe("Ensure the last character in the sentence is valid", () => {
    let sentence;
    it("returns an error for invalid last character", () => {
      sentence = "I am testing the number 1 error";
      let testResult = lastCharacterCheck(sentence);
      let expected = "Sentence must end with '.' '?' or '!'";
      expect(testResult).toBe(expected);
    });
    it("it returns no error for ?", () => {
      sentence = "I am testing the number 1 error?";
      let testResult = lastCharacterCheck(sentence);
      let expected = "";
      expect(testResult).toBe(expected);
    });
    it("it returns no error for !", () => {
      sentence = "I am testing the number 1 error!";
      let testResult = lastCharacterCheck(sentence);
      let expected = "";
      expect(testResult).toBe(expected);
    });
    it("it returns no error for .", () => {
      sentence = "I am testing the number 1 error.";
      let testResult = lastCharacterCheck(sentence);
      let expected = "";
      expect(testResult).toBe(expected);
    });
  });
  
  describe("Ensure that quotes are correctly escaped", () => {
    let sentence;
    it("returns an error for invalid last character", () => {
      sentence = 'I am testing the "number 1 error';
      let testResult = doubleQuoteCheck(sentence);
      let expected = "All opened quote tags in the sentence must be a closed";
      expect(testResult).toBe(expected);
    });
    it("returns no error a valid correctly escaped or closed quote", () => {
      sentence = 'I am testing the " number" One error.';
      let testResult = doubleQuoteCheck(sentence);
      let expected = "";
      expect(testResult).toBe(expected);
    });
  });

  describe("Ensure that the input field is required", () => {
    let sentence;
    it("returns an error for empty sentence", () => {
        sentence = ""
        let testResult = emptinessCheck(sentence)
        let expected = "Input is required"
        expect(testResult).toBe(expected);
    })

    it("returns no error as field is not empty", () => {
        sentence = "Hello I am valid"
        let testResult = emptinessCheck(sentence)
        let expected = ""
        expect(testResult).toBe(expected);
    })
  });
  