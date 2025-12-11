// variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela"
}, {
    quote: "The way to get started is to quit talking and begin doing.",
    person: "Walt Disney"
}, {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon"
}, {
    quote: "The purpose of our lives is to be happy.",
    person: "Dalai Lama"
}, {
    quote: "Get busy living or get busy dying.",
    person: "Stephen King"
}, {
    quote: "You only live once, but if you do it right, once is enough.",
    person: "Mae West"
},
{
    quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    person: "Martin Luther King Jr."
}, {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    person: "Ralph Waldo Emerson"
}, {
    quote: "The only impossible journey is the one you never begin.",
    person: "Tony Robbins"
}, {
    quote: "Life is either a daring adventure or nothing at all.",
    person: "Helen Keller"
}, {
    quote: "You miss 100% of the shots you don't take.",
    person: "Wayne Gretzky"
}, {
    quote: "The best way to predict the future is to create it.",
    person: "Peter Drucker"
}, {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill"
}, {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    person: "Ralph Waldo Emerson"
}, {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    person: "Franklin D. Roosevelt"
}, {
    quote: "Act as if what you do makes a difference. It does.",
    person: "William James"
}, {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    person: "Henry David Thoreau"
}, {
    quote: "Don't watch the clock; do what it does. Keep going.",
    person: "Sam Levenson"
}, {
    quote: "You cannot shake hands with a clenched fist.",
    person: "Indira Gandhi"
}, {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt"
}, {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius"
}, {
    quote: "Everything you can imagine is real.",
    person: "Pablo Picasso"
}, {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt"
}, {
    quote: "You are never too old to set another goal or to dream a new dream.",
    person: "C.S. Lewis"
}, {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs"
}, {
    quote: "Dream big and dare to fail.",
    person: "Norman Vaughan"
}, {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    person: "Steve Jobs"
}, {
    quote: "The best revenge is massive success.",
    person: "Frank Sinatra"
}, {
    quote: "Life is really simple, but we insist on making it complicated.",
    person: "Confucius"
}, {
    quote: "What we think, we become.",
    person: "Buddha"
}, {
    quote: "The mind is everything. What you think you become.",
    person: "Buddha"
}
]

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});