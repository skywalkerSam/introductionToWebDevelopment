// Promise example

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))


// ASYNC AWAIT - Syntactic Sugar, built on top of promises. Makes code easier to read and write...?

// Example 1
async function playerStart() {
    const first_move = await movePlayer(100, 'Left')   // PAUSE
    await movePlayer(400, 'Left')   // PAUSE
    await movePlayer(10, 'Right')   // PAUSE
}
