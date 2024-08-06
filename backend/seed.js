const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Quote = require('./models/Quote');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    const quotes = [
        {
            text: "She's strong! And scary...I bet she's single...I'd put money on it...",
            author: "Masashi Kishimoto",
           
        },
        {
            text: "If you don't like the hand that fate's dealt you, fight for a new one.",
            author: "Masashi Kishimoto",
          
        },
        {
            text: "When people are protecting something truly special to them, they truly can become...as strong as they can be.",
            author: "Masashi Kishimoto",
         
        },
        {
            text: "When a man learns to love, he must bear the risk of hatred.",
            author: "Uchiha Madara",
           
        },
        {
            text: "A smile is the best way to get away with trouble even if it’s a fake one.",
            author: "Masashi Kishimoto",
           
        },
        {
            text: "There's no advantage to hurrying through life.",
            author: "Shikamaru Nara",
           
        },
        {
            text: "The pain of being alone is completely out of this world, isn't it? I don't know why, but I understand your feelings so much, it actually hurts.",
            author: "Masashi Kishimoto",
           
        },
        {
            text: "Sure, in a ninja's world, those who violate the rules and fail to follow orders...are lower than garbage. However...those who do not care for and support their fellows...are even lower than that!",
            author: "Obito Uchiha",
           
        },
        {
            text: "The weaker you are the louder you bark.",
            author: "Tenten",
           
        },
        {
            text: "Give up trying to make me give up.",
            author: "Masashi Kishimoto",
           
        },
        {
            text: "There's only one thing that can heal the heart... Only one... It's love, Gaara.",
            author: "Masashi Kishimoto",
           
        },
        {
            text: "Gaara: Can Sasuke come out to Die? Kakashi: Not Now. Gaara:............. Gaara: How 'bout now?",
            author: "Masashi Kishimoto",
            
        },
        {
            text: "It’s foolish to fear what we’ve yet to see and know.",
            author: "Masashi Kishimoto",
           
        },
        {
            text: "The difference between insanity and genius is measured only by success and failure.",
            author: "Masashi Kishimoto",
           
        },
        {
            text: "I think of you as a friend. I used to think 'friend' was just another word... Nothing more, nothing less. But when I met you, I realized what was important was the word's meaning.",
            author: "Masashi Kishimoto",
           
        },
        {
            text: "Being hurt inevitably breeds feelings of hatred towards your attacker. But when we hurt others, we have to deal with their hatred for us, and our own feelings of guilt. Knowing what it feels like to be hurt is exactly why we try to be kind to others. That’s what makes us humans.",
            author: "Masashi Kishimoto",
           
        },
        {
            text: "People live their lives bound by what they accept as correct and true. That’s how they define Reality. But what does it mean to be 'correct' or 'true'? Merely vague concepts… Their Reality may all be a mirage. Can we consider them to simply be living in their own world, shaped by their beliefs?",
            author: "Masashi Kishimoto",
            
        },
        {
            text: "Now there's something I understand a little better. Hate, sadness, even joy. To be able to share it with another person...Naruto Uzumaki from fighting him I learned that. He knew pain like I did and then he taught me that you can change your path. I wish that one day I can be needed by someone. Not as a frightening weapon...But as the sand's Kazekage.",
            author: "Masashi Kishimoto",
        
        },
        {
            text: "Naruto: I bet you're dying to know my name! Gaara: I couldn't care less.",
            author: "Masashi Kishimoto",
            
        },
        {
            text: "It's nothing that complicated, I just want to kill him.",
            author: "Masashi Kishimoto",
            
        },
        {
            text: "But you... You helped me find my way and take the correct path, Naruto... I always chased after you...wanting to catch up...wanting to walk together with you forever... I want to be at your side, always... You changed me, Naruto! Your smiling face saved me! And that's why I'm not afraid to die, defending you! Because... I love you...",
            author: "Masashi Kishimoto",
            
        },
        {
            text: "Even the sweetest girl needs a hard center, or she's not gonna make it out there!!",
            author: "Sakura",

        },
        {
            text: "Dattebyo!!!",
            author: "Masashi Kishimoto",
           
        },
        {
            text: "For those who don't believe in themselves, hardwork is worthless.",
           
        },
        {
            text: "In this world, whenever there is light, there are also shadows. As long as the concept of winners exist, there must also be losers. The selfish desire of wanting to maintain peace causes wars and hatred is born to protect love.",
            author: "Masashi Kishimoto",
           
        },
        {
            text: "Believe it!!!",
            author: "Naruto",
            
        },
        {
            text: "In order to survive, we cling to all we know and understand. And label it reality. But knowledge and understanding are ambiguous. That reality could be an illusion. All humans live with the wrong assumptions. Isn't that another way of looking at it? That sharingan how much can you really see?",
            author: "Masashi Kishimoto",
            
        },
        {
            text: "The most important talent for a shinobi is not the number of jutsu. The important thing is... HAVING THE GUTS TO NEVER GIVE UP.",
            author: "Masashi Kishimoto",
            
        },
        {
            text: "People cannot win against their loneliness because loneliness is this world’s worst kind of pain.",
            author: "Gaara",
            
        },
        {
            text: "I'm Kakashi Hatake. Things I like and things I hate… I don't feel like telling you that. My dreams for the future… never really thought about it. As for my hobbies… I have lots of hobbies.",
            author: "Masashi Kishimoto",
           
        }
    ];
    

Quote.insertMany(quotes)
    .then(() => {
        console.log('Quotes added successfully');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
