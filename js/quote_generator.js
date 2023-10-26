const button = document.getElementById("new-quote-btn");
const quoteDiv = document.getElementById("quote-output");
const authorDiv = document.getElementById("author-output");

const quotes = [
  {
    quote: "Behind every successful person is a substantial amount of coffee.",
    author: "— Unknown"
  },
  {
    quote: "Coffee is the common man's gold. It brings to every person the feeling of luxury and nobility",
    author: "— Sheik-Abd-al-Kadir"
  },
  {
    quote: "I have a love affair with coffee.",
    author: "— Unknown"
  },
  {
    quote: "Coffee is the best thing in life because it brings people together.",
    author: "— Unknown"
  },
  {
    quote: "Life is too short for bad coffee.",
    author: "— Gord Downie"
  },
  {
    quote: "Coffee is the liquid hug for your brain.",
    author: "— Unknown"
  },
  {
    quote: "Coffe is a beautiful, complex beverage that has everything to do with the people you share it with.",
    author: "— Unknown"
  },
  {
    quote: "Coffee is proof that God loves us and wants us to be happy.",
    author: "— Unknown"
  },
  {
    quote: "Coffee is the answer, but I don't know the question.",
    author: "— Unknown"
  },
  {
    quote: "I want someone to look at me the way I look at coffee",
    author: "— Unknown"
  },
  {
    quote: "If this is coffee, please bring me some tea; but if this is tea, please bring me some coffee.",
    author: "— Abraham Lincoln"
  },
  {
    quote: "May your coffee kick in before reality does.",
    author: "— Unknown"
  },
  {
    quote: "Coffee connects us in some many ways to each other, to our sense, and to the earth that supports the coffee trees.",
    author: "— Rohan Marley"
  },
  {
    quote: "Coffee is a language in itself.",
    author: "— Jackie Chan"
  },
  {
    quote: "I orchestrate my morning to the tune of coffee.",
    author: "— Terri Guillemets"
  },
  {
    quote: "He was my cream and I was his cofffee. And when you poured us together, it was something.",
    author: "— Josephine Baker"
  },
  {
    quote: "What goes best with a cup of coffee? Another cup.",
    author: "— Henry Rollins"
  },
  {
    quote: "Friends bring happiness into your life. Best friends bring coffee.",
    author: "— Unknown"
  },
  {
    quote: "Coffee is a kind of magic you can drink.",
    author: "— Catherynne M. Valente"
  },
  {
    quote: "Life is like coffee, the darker it gests, the more it energizes.",
    author: "— Ankita Singhal"
  },
  {
    quote: "Never underestimate the power of a good cup of coffee.",
    author: "— Ursula Vernon"
  },
  {
    quote: "I don't drink coffee to wake up. I wake up to drink coffee.",
    author: "— Unknown"
  },
  {
    quote: "I need a coffee to go with my coffee.",
    author: "— Zooey Deschanel"
  },
  {
    quote: "Even bad coffee is better than no coffee at all.",
    author: "— David Lynch"
  },
  {
    quote: "Never say no to coffee.",
    author: "— Cesar"
  },
  {
    quote: "You can't buy happiness, but you can buy coffee, and that's pretty close.",
    author: "— Unknown"
  },
  {
    quote: "It's never too late for a coffee. After all, it's morning somewhere in the world.",
    author: "— Zooey Deschanel"
  },
  {
    quote: "Less talk, more coffee.",
    author: "— Unknown"
  },
  {
    quote: "Any time is a coffee time.",
    author: "— Unknown"
  },
  {
    quote: "A yawn is a silent scream for coffee.",
    author: "— Unknown"
  },
  {
    quote: "Happiness is a cup of coffee and a good book.",
    author: "— Unknown"
  },
  {
    quote: "Ways to win my heart: Buy me coffee, Make me coffee, Be coffee.",
    author: "— Unknown"
  },
  {
    quote: "Coffee makes me user-friendly.",
    author: "— Unknown"
  },
  {
    quote: "Having charged your heart and brain with a cup of coffee, you're ready to face the challenge of life.",
    author: "— Sahara Sanders"
  },
  {
    quote: "Never underestimate the power of a good cup of coffee.",
    author: "— Unknown"
  },
  {
    quote: "A cup of coffee shared with a friend is happiness tasted and time well spent.",
    author: "— Unknown"
  },
  {
    quote: "It's when you look over the top of your coffee cup, that you can smile at life.",
    author: "— Anthony T. Hincks"
  },
  {
    quote: "Behind every successful woman is a substantial amount of coffee.",
    author: "— Stephanie Piro"
  },
  {
    quote: "There's nothing sweeter than a cup of bitter coffee.",
    author: "— Rian Aditia"
  },
  {
    quote: "Coffee: creative lighter fluid.",
    author: "— Floyd Maxwell"
  },
  {
    quote: "Good ideas start with brainstorming. Great ideas start with coffee.",
    author: "— Unknown"
  },
  {
    quote: "Three cups of coffee a day keeps the doctor away!",
    author: "— Henry Rollins"
  },
  {
    quote: "Coffee, because adulting is hard.",
    author: "— Unknown"
  },
  {
    quote: "Coffee, the favorite drink of the civilized world.",
    author: "— Thomas Jefferson"
  },
  {
    quote: "Seven days without coffee makes one WEAK.",
    author: "— Unknown"
  },
  {
    quote: "Coffee first. Schemes later.",
    author: "— Unknown"
  },
  {
    quote: "Humanity runs on coffee.",
    author: "— Unknown"
  },
  {
    quote: "My birthstone is a coffee bean.",
    author: "— Unknown"
  },
  {
    quote: "Black as the devil, hot as hell, pure as an angel, sweet as love.",
    author: "— Charles Maurice de Talleyrand"
  },
  {
    quote: "It's amazing how the world begins to change through the eyes of a cup of coffee.",
    author: "— Donna A. Favors"
  },
  {
    quote: "As long as there was coffee in the world, how bad could things be?",
    author: "— Cassandra Clare"
  },
  {
    quote: "The powers of a man's mind are directly proportional to the quantity of coffee he drinks.",
    author: "— Sir James MacKintosh"
  },
  {
    quote: "Without my morning coffee, I'm just like a dried-up piece of goats.",
    author: "— J.S. Bach"
  },
  {
    quote: "I believe humans get a lot done, not because we're smart, but because we have thumbs so we can make coffee.",
    author: "— Flash Rosenberg"
  },
  {
    quote: "Life without coffee is like something without something... sorry, I haven't had any coffee yet.",
    author: "— Unknown"
  },
  {
    quote: "I'd rather take coffee than compliments just now.",
    author: "— Louisa May Alcott"
  },
  {
    quote: "I like my coffee like I like myself: strong, sweet, and too hot for you.",
    author: "— Jac Vanek"
  },
  {
    quote: "Love is in the air, and it smells like coffee.",
    author: "— Unknown"
  },
  {
    quote: "No matter what historians claimed, BC really stood for 'Before Coffee'.",
    author: "— Cherise Sinclair"
  },
  {
    quote: "May your coffee be strong and your Monday be short.",
    author: "— Unknown"
  },
  {
    quote: "Coffee is my water now.",
    author: "— Becky G"
  },
  {
    quote: "They said I could be anything, so I decided to be caffeinated.",
    author: "— Lizzie Chantree"
  },
  {
    quote: "Life is scary without coffee.",
    author: "— Unknown"
  },
  {
    quote: "Of course size matters. Nobody wants a small cup of coffee.",
    author: "— Unknown"
  },
  {
    quote: "Coffee doesn't ask questions. Coffee understands.",
    author: "— Unknown"
  },
  {
    quote: "Coffee was only way of stealing time that should by rights belong to your slightly older self.",
    author: "— Terry Pratchett"
  },
  {
    quote: "I don't need an inspirational quote. I need coffee.",
    author: "— Unknown"
  },
  {
    quote: "When life gives you lemonade, return it and ask for coffee instead.",
    author: "— Unknown"
  },
  {
    quote: "Coffee - because bad mornings deserve a second chance.",
    author: "— Unknown"
  },
  {
    quote: "Coffee: because hating your job should be done with enthusiasm.",
    author: "— Unknown"
  },
  {
    quote: "If coffee can't fix it, it's a serious problem.",
    author: "— Unknown"
  },
  {
    quote: "My blood type is coffee.",
    author: "— Unknown"
  },
  {
    quote: "Maybe coffee is addicted to me.",
    author: "— Unknown"
  },
  {
    quote: "Me without coffee: tired. Me with coffee: tired but faster.",
    author: "— Unknown"
  },
  {
    quote: "Coffee alone is a strong support network.",
    author: "— Unknown"
  },
  {
    quote: "Caffeine is the other vitamin C.",
    author: "— Unknown"
  },
  {
    quote: "Life is short - have another cup of coffee.",
    author: "— Unknown"
  },
  {
    quote: "Don't feel depresso, have an espresso.",
    author: "— Unknown"
  },
  {
    quote: "I never laugh until I've had my coffee.",
    author: "— Clark Gable"
  }
]

button.addEventListener("click", function() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


  if (quoteDiv.innerText !== randomQuote.quote) {
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  } else {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  }
});