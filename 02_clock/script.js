const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

function setDate() {
    const now = new Date();

    // Seconds hand
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90; // turn seconds into degrees
    // remove transition at 0 to stop it snapping backwards
    if (seconds === 0) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = '';
    }
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // Minutes hand
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90; // turn minutes into degrees
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;

    // Hours hand
    const hours = now.getHours();
    // convert hours into degrees, add minute fraction for smooth movement
    const hourDegrees = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// run function every second
setInterval(setDate, 1000);
// run once right away so it doesn’t wait a second to start
setDate();
