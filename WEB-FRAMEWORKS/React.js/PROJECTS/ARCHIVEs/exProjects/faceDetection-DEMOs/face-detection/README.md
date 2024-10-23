# Project: [face-detection](https://github.com/skywalkerSam/face-detection)

[Deployed with Firebase](https://facedetection-fr.web.app)

[Deployed with GitHub Pages](https://skywalkersam.github.io/face-detection/)

A simple face-detection application using clarifai.

- Moved from `REST` to `gRPC`

- Frontend alone won't work, API calls moved to the backend for better security.

## The Journey...

Life's one funny mf... I really thought that it was goin' to be easy but what can i say... if it was easy then everyone would do it, innit?

- The whole project `Frontend & Backend` took about 2 months.

- The `gRPC` integration took about 3 days alone n' 1 mental breakdown!

Let's just keep going... im doin' it for the very first time so, maybe i shouldn't expect too much... No Expectations!

## Code dump for markdown conversion!

```javascript
// Node runtime platform ( Linux, Windows, Mac  )
console.log(process.platform);


// Process id
console.log(process.pid)


/* Environment variables: 
- Mostly used in production environments to keep things private, secure and dynamic! 

- It's a good practice to store sensitive information like secrets and keys in environment variables, rather than hardcoding 'em into your applications

    - process.env
    - process.env.PORT
    - process.env.DATABASE_URL
    - process.env.SECRET_KEY
    - process.env.API_KEY
    - process.env.SECRET
    - process.env.TOKEN
    - process.env.JWT_SECRET

*/

// console.log(process.env)

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/test'

const app = require('http').createServer((req, res) => { res.send('Hello!') })
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`Database URL is ${DATABASE_URL}`)
})


/* Setting up environment variables:

BASH: 
    - PORT=3000 node server.js
    - DATABASE_URL=postgres://localhost:5432/prod node server.js

Again, setting up env variables inside windows is a shitshow, use WSL!

*/

```

## Musical Sources

- [DAMN.](https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY)

- [Her Loss](https://open.spotify.com/album/5MS3MvWHJ3lOZPLiMxzOU6)

- [Starboy](https://open.spotify.com/album/2ODvWsOgouMbaA5xf0RkJe)

- [After Hours](https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj)

- [Dawn FM](https://open.spotify.com/album/2nLOHgzXzwFEpl62zAgCEC)

- [AUSTIN](https://open.spotify.com/album/6r1lh7fHMB499vGKtIyJLy)

- [beerbongs & bentleys](https://open.spotify.com/album/6trNtQUgC8cgbWcqoMYkOR)

- [Goodbye & Good Riddance](https://open.spotify.com/album/6tkjU4Umpo79wwkgPMV3nZ)

- [Hollywood's Bleeding](https://open.spotify.com/album/4g1ZRSobMefqF6nelkgibi)

- [SPIDER-MAN: Into The Spider-Verse](https://open.spotify.com/album/35s58BRTGAEWztPo9WqCIs)

- [SPIDER-MAN: ACROSS THE SPIDER-VERSE](https://open.spotify.com/album/1bwbZJ6khPJyVpOaqgKsoZ)

- [Entergalactic](https://open.spotify.com/album/4aW4iDepQUl5ZCHd1Gli68)

- [Justice](https://open.spotify.com/album/5dGWwsZ9iB2Xc3UKR0gif2)

- [Evolve](https://open.spotify.com/album/33pt9HBdGlAbRGBHQgsZsU)

- [=](https://open.spotify.com/album/32iAEBstCjauDhyKpGjTuq)

## Extras

- [if...](https://open.spotify.com/playlist/6ROrmnPhG1dB0IXG1zgY0Q)

- [Peace Of Mind](https://open.spotify.com/playlist/7611gkft61GOQMtpm6sgFR)

- [Time](https://open.spotify.com/album/63TYyeXlBYoYKNvE6rT3hI)

## Until next time...

## ;)
