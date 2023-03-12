let heroSubtitle = document.getElementById('heroSubtitle');

const subtitles = [
    'Wood is a structural tissue found in the stems and roots of trees and other woody plants. It is an organic material – a natural composite of cellulose fibers that are strong in tension and embedded in a matrix of lignin that resists compression. Wood is sometimes defined as only the secondary xylem in the stems of trees,[1] or it is defined more broadly to include the same type of tissue elsewhere such as in the roots of trees or shrubs.[citation needed] In a living tree it performs a support function, enabling woody plants to grow large or to stand up by themselves. It also conveys water and nutrients between the leaves, other growing tissues, and the roots. Wood may also refer to other plant materials with comparable properties, and to material engineered from wood, or woodchips or fiber. ',
    'Season 8, Birthday Cake!',
    "Wait, did you say 'ungion'?",
    "Brought to you by Bizmo",
    "Tracking FunEHP since 2016",
    "Just one more Minecraft server, I swear we'll finish it this time",
    "These IPs have been the same forever...",
    "Now sponsored by Kitty Clicker",
    "Buy a lotto ticket with that luck, kid",
    "No no no, it's called PowerBall",
    "Stopping you from 'going on a walk'",
    "As the page loads you notice a boar with a trinket in his mouth",
    "Fueled by the special Coke machines in McDonalds",
    "A Gran Smif a day keeps the doctor away",
    "Proud sponsor of the Knockout Ducks",
    "All the time, all the time",
    "More information, less grimformation",
    "Congrats Chris!",
    "FEMA Deathcamp, FEMA Deathcamp",
    "iron ingot",
    "Home sweet /home home"
];

heroSubtitle.textContent = subtitles[Math.floor(Math.random() * subtitles.length)];