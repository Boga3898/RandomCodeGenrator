  
let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', 
    '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
    '“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou',
    '“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
