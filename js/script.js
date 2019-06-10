

/*For the first part of this project, I researched a series of quotes, the authors, the citations, and the year the quotes were published. 
Then I created an Array that I called quotes, and inside that Array I created five objects that stores the properties of the quotes, citations, ect. 
*/
var quotes = [
  {
    quote: 'Life can only be understood backwards; but it must be lived forwards.',
    source: 'Soren Kierkegaard',
    citation: 'The Sickness Unto Death',
    year: 1843,
    tags: 'Self-Development',
  },
  {
    quote: 'Run from what is comfortable. Forget safety. Live where you fear to live. Destroy your reputation. Be notorious. I have tried prudent planning long enough. From now on I will be mad.',
    source: 'Rumi',
    citation: ' ',
    year: 1995,
    tags: 'Self-Devlopment',
  },
  {
    quote: 'Relationships are leverage. If you give value to someone first, you have leverage.',
    source: 'Gary Vee',
    citation: 'www.Instagram.com/garyvee',
    year: 2017,
    tags: 'Business Relationships',
  },
  {
    quote: 'Greatness is not this wonderful, esoteric, elusive, God-like feature that only the special among us will ever taste. It is something that truly exists in all of us.',
    source: 'Will Smith',
    citaiton: 'Ted Talk',
    year: 2015,
    tags: 'Self Awareness',
  },
  {
    quote: 'Education is an ornament in prosperity, and a refuge in adversity',
    source: 'Aristotle',
    citation: ' ',
    year: '  ',
    tags: 'Life Long Learning'
  }
];

/*When the time came to create an environment that allowed for a different background color to appear each time a new random quote appeared; I created the randomColor function
that holds the instructions for generating random colors under the confines of rgb value in JavaScript. and called said function later in the code. 
*/
function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var color = "rgb(" + red + ',' + green + ',' + blue + ")";

  return color;
}

/* In this second part of the project, I need to create an environment where the above objects of the Array could be selected at random. 
So I created the getRandomQuote function with the specific instructions to create a random number and assign that number to the length or number of quotes that are in my Array.
*/

function getRandomQuote() {
  const number = Math.floor(Math.random() * quotes.length);
  return quotes[number];
}
getRandomQuote(quotes);
/*Needed to create a function that would be the instructor of the entire code. The job of the printQuote function is to be a vehicle that the entire code passes through, and lends approval 
to it before the actual code can be printed to the web page. in the function, creating a variable that holds the math for randomality and the array of objects too (var random)
I was able to specify what exactly in the objects of the array that I wanted to make random. 
*/
function printQuote(quotes) {
  var random = getRandomQuote(quotes);
  var actualQuote = ' ';

  actualQuote = "<p class='quote'> " + random.quote + " </p>";
  actualQuote += "<p class='source'> " + random.source;
    actualQuote += "<span class= 'tags'> " + random.tags;  // I added a extra property to the objects of the array that contains a tags value. This value basically places each quote into a broader category that the quote itsself was derived from. 
  if (random.citation) {
    actualQuote += "<span class='citation'> " + random.citation + " </span>";
  }
  if (random.year) {
    actualQuote += "<span class= 'year'> " + random.year + " </span></p>";
  }

  const resultColor = randomColor(); // Here I called my randomColor function that I created at the top of the code that allows a different color background when a new random quote appears.

  document.body.style.backgroundColor = resultColor;
  document.getElementById('quote-box').innerHTML = actualQuote;

}
setInterval(printQuote, 5000); // I used the setInterval value in JS to place a timer on the web page that will reload the contents of the printQuote function every 20000 milliseconds or 20 seconds. 


document.getElementById('loadQuote').addEventListener("click", printQuote, false);