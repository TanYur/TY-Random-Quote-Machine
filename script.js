function stars() {
    let count = 500;
    let scene = document.querySelector(".scene");
    let i = 0;
    while (i < count) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 3;

        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.width = 1 + size + "px";
        star.style.height = 1 + size + "px";

        star.style.animationDuration = 8 + duration + "s";
        star.style.animationDelay = duration + "s";

        scene.appendChild(star);
        i++;
    }
}
stars();

var quotes = [
    `Someday is not a day of the week.`,
    `Never memorize something that you can look up.`,
    `Live as if you were to die tomorrow. Learn as if you were to live forever.`,
    `Those who says it cannot be done should not interrupt the person doing it.`,
    `Somewhere, something incredible is waiting to be known.`,
    `You can't cross the sea merely by standing and staring at the water.`,
    `There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.`,
    `By seeking and blundering we learn.`,
    `Let us cultivate our garden.`,
    `Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.`,
    `Whether you want to uncover the secrets of the universe, or you want to pursue a career in the 21st century, basic computer programming is an essential skill to learn.`,
    `The scariest moment is always just before you start.`,
];
const authors = [
    "Denise Brennan-Nelson",
    "Albert Einstein",
    "Mahatma Gandhi",
    "Unknown",
    "Carl Sagan",
    "Rabindranath Tagore",
    "Ernest Hemingway",
    "Johann Wolfgang von Goethe",
    "Voltaire",
    "Eric Raymond",
    "Stephen Hawking",
    "Stephen King",
];
var currentQuote = "",
    currentAuthor = "";

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
function getRandomAuthor() {
    return authors[quotes.findIndex((i) => i == currentQuote)];
}

function getQuote() {
    currentQuote = getRandomQuote();
    currentAuthor = getRandomAuthor();

    $("#tweet-quote").attr(
        "href",
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );

    $(".quote-text").animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $("#text").text(currentQuote);
    });

    $("#author").animate({ opacity: 0 }, 520, function () {
        $(this).animate({ opacity: 1 }, 520);
        $("#author").html(currentAuthor);
    });
}
$(document).ready(function () {
    $("#new-quote").on("click", getQuote);
});
