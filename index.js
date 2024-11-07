import natural from "natural";
const tokenizer = new natural.WordTokenizer();
const sentoken = new natural.SentenceTokenizer();
//const abbrev = new natural.abbreviations();
const stemmer = natural.PorterStemmer;
import stopwords from "stopword";

// Example text
const text = "The quick brown fox jumps over the lazy dog. How is it?";

// Tokenization
const tokens = tokenizer.tokenize(text);
console.log("Tokens:", tokens); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
const sentenceTokens = sentoken.tokenize(text);
console.log("Sentence Tokens:", sentenceTokens);

// const abbrevTokens = abbrev.tokenize(text);
// console.log("Abbrev Tokens:", abbrevTokens);

// Stemming
const stemmedTokens = tokens.map((token) => stemmer.stem(token));
console.log("Stemmed Tokens:", stemmedTokens); // ["the", "quick", "brown", "fox", "jump", "over", "the", "lazi", "dog"]

// Stopword Removal
const filteredTokens = stopwords.removeStopwords(tokens);
console.log("Filtered Tokens:", filteredTokens); // ["quick", "brown", "fox", "jumps", "lazy", "dog"]
