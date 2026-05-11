const poems = {
    "Monday": "Fresh starts and morning dew, a brand new week begins for you.",
    "Tuesday": "The sun climbs high in the quiet sky, as the busy hours flutter by.",
    "Wednesday": "The middle bridge, a steady climb, finding peace in the rush of time.",
    "Thursday": "Almost there, the weekend nears, cast away your weekly fears.",
    "Friday": "The golden hour, the setting sun, the work is over, the joy begun.",
    "Saturday": "Laughter rings and spirits soar, open up the weekend door.",
    "Sunday": "Softest light and restful grace, a gentle end to the weekly race."
};

const btn = document.getElementById('magic-button');
const poemContainer = document.getElementById('poem-container');
const poemText = document.getElementById('poem-text');
const dateDisplay = document.getElementById('date-display');

// Set the date immediately
const today = new Date();
const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
dateDisplay.innerText = `Today is ${dayName}`;

btn.addEventListener('click', () => {
    // Show Poem
    poemText.innerText = poems[dayName] || "Have a wonderful day!";
    poemContainer.classList.remove('hidden');

    // Create Flowers
    for (let i = 0; i < 15; i++) {
        createFlower();
    }
});

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Choose a random flower/heart emoji
    const types = ['🌸', '🌼', '🌷', '🌺', '🌻', '✨', '🤍'];
    flower.innerText = types[Math.floor(Math.random() * types.length)];

    // Randomize position across the whole screen
    const x = Math.random() * 90; // Using 90 to keep them slightly off the edges
    const y = Math.random() * 90;

    // Random rotation for a natural look
    const rotation = Math.random() * 360;
    flower.style.setProperty('--rotation', `${rotation}deg`);

    flower.style.left = x + "vw";
    flower.style.top = y + "vh";

    document.body.appendChild(flower);

    // We removed the setTimeout, so the flower stays forever!
}