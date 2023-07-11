// Create agetResults function that uses async and await. Inside of the function, call the luckyDraw function for each of the players: Tina, Jorge, Julien

// Log out the resolved value for each promise and handle any promise rejections.

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
        if (win) {
            resolve(`${player} won a prize in the draw!`);
        } else {
            reject(new Error(`${player} lost the draw.`));
        }
        });
    });
}

const players = ['Tina', 'Jorge', 'Julien'];

async function getResults() {

    try {
        const player1 = await luckyDraw('Tina')
        console.log(player1)

        const player2 = await luckyDraw('Jorge')
        console.log(player2)

        const player3 = await luckyDraw('Julien')
        console.log(player3)

    } catch(err) {
        console.error(err)
    }
}

getResults()


