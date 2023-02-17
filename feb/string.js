var s = "SazAmple satring";
console.log(s);

var size = s.length;
console.log(size);

//Find the character store on a given index
console.log(s[8]);
console.log(s.charAt(8));

// ASCI Code 
console.log(s.charCodeAt(2));

// Find the index of character/substring a in string
console.log(s.indexOf('a'));
console.log(s.lastIndexOf('a'));
console.log(s.indexOf('ans'));


// Check if a substring exist in a string

var isExist = s.search("anshu");
console.log(isExist);

isExist = s.includes('mpgdhc');
console.log(isExist);

// Check if a string starts with some sub string 
var isStartsWith = s.startsWith("Saz");
console.log(isStartsWith);

// Check if a string ends with some sub string 

var isEndsWith = s.endsWith("ng");
console.log(isEndsWith);

// Convert string to upper case

var upper = s.toUpperCase();
console.log(upper);

var lower = s.toLowerCase();
console.log(lower);

// How we can create substring from string
//SazAmple satring
//Ample satring
var subsStr = s.slice(3);
console.log(subsStr);

//zAmpl
var subsstr1 = s.slice(2,7);
console.log(subsstr1);

subsStr = s.substring(4,7);
console.log(subsStr);

// "a,b,c,d,e"
// "This is a sample, string" Given a sentence print all words of it

var sentence = "This is a sample Is string. sample is very good.sample sample";
var words = sentence.split(" ");
console.log(words);

console.log(sentence.split(""));

// Go and replace all instances of sample with demo
var updatedSententence = sentence.replaceAll("sample","")
console.log(updatedSententence);

var regularExpression = /is/gi;
updatedSententence = sentence.replace(regularExpression,'demo');

console.log(updatedSententence);

var input = " abc    ";
console.log(input.trim());

var res = sentence.match(regularExpression);
console.log(res);


var input = "This67 is a sample 763764Is string. sample e637is very good.SAMPLE sample7236737463726379"
var rgx = /[0-9]+/ig;
console.log(input.match(rgx));
console.log(input.match(/[a-z]+/g));
console.log(input.match(/s.*/gi))

window.addEventListener('scroll')

