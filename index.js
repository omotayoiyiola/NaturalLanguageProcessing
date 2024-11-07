import natural from "natural";
const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;
import stopwords from "stopword";

// Example text
const text = "The quick brown fox jumps over the lazy dog.";

// Tokenization
const tokens = tokenizer.tokenize(text);
console.log("Tokens:", tokens); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

// Stemming
const stemmedTokens = tokens.map((token) => stemmer.stem(token));
console.log("Stemmed Tokens:", stemmedTokens); // ["the", "quick", "brown", "fox", "jump", "over", "the", "lazi", "dog"]

// Stopword Removal
const filteredTokens = stopwords.removeStopwords(tokens);
console.log("Filtered Tokens:", filteredTokens); // ["quick", "brown", "fox", "jumps", "lazy", "dog"]
