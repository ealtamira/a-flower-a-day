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
    flower.innerText = ['🌸', '🌼', '🌷', '🌺', '🌻'][Math.floor(Math.random() * 5)];
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 1000);
}