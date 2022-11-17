# Project Title

Sentence validator
# Project Description
This project validates a sentence against some rules

## Rules 
- String starts with a capital letter.
- String has an even number of quotation marks.
- String ends with one of the following sentence termination characters: ".", "?", "!"
- String has no period characters other than the last character.
- Numbers below 13 are spelled out (”one”, “two”, "three”, etc…).

### Valid Sentences:
- The quick brown fox said “hello Mr lazy dog”.
- The quick brown fox said hello Mr lazy dog.
- One lazy dog is too few, 13 is too many.
- One lazy dog is too few, thirteen is too many.
- How many "lazy dogs" are there?

### Invalid Sentences:
- The quick brown fox said "hello Mr. lazy dog".
- the quick brown fox said “hello Mr lazy dog".
- "The quick brown fox said “hello Mr lazy dog."
- One lazy dog is too few, 12 is too many.
- Are there 11, 12, or 13 lazy dogs?
- There is no punctuation in this sentence


# Technology
 [Reactjs](https://reactjs.org/) 

# live 
https://sentencevalidator.netlify.app/

# Getting Started with Sentence Validator

## Available Scripts

## Installation
Use the package manager [NPM](https://https://nodejs.org/en/) to install foobar.

* git clone
  [Sentence-Validator](https://github.com/TMDav007/SentenceValidator)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.


## Author
 - Afolabi, Opeyemi T.
