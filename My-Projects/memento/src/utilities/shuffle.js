// utility: shuffle.js

export default function shuffle() {
    const assets = [
        { image: '/assets/ts.png' },
        { image: '/assets/js.png' },
        { image: '/assets/jsx.png' },
        { image: '/assets/react.png' },
        { image: '/assets/node.png' },
        { image: '/assets/firebase.png' },
        { image: '/assets/stack.png' },
        { image: '/assets/html5.png' },
    ]
    // Duplicating the array [1, 2, 3, 1, 2, 3]
    return ([...assets, ...assets]
        // Use the Fisher-Yates (also known as Knuth) shuffle algorithm.
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }))
    )
}
