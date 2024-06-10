// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import appLogo from '/favicon.svg'
import starboyLogo from "/logo.png";
import PWABadge from "./PWABadge.tsx";
import "./App.css";
import "tachyons";
import InputBox from "./components/InputBox/InputBox.tsx";
import { useState } from "react";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay.tsx";

const SERVER = "http://localhost:8080/test";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function onChange(event) {
    console.log(event.target.value);22
    setPrompt(event.target.value);
  }

  async function onSubmit() {
    await fetch(SERVER, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: prompt,
      }),
    })
      .then((res) => res.json())
      // .then(resp => console.log(resp))
      .then((response) => setImageUrl(response))
      .catch((err) => console.log(err));
    console.log(imageUrl);
    // console.log(typeof(imageUrl))
  }

  return (
    <>
      <div>
        <a
          href="https://github.com/skywalkersam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={starboyLogo} alt="Starboy Logo" className="logo" />
        </a>
      </div>
      <header>
        <div>
          <h1 className="f1 red">Image Generator</h1>
          <p className="tc">
            <em>with OPENAI's</em> <strong>Dall-E 3</strong>
          </p>
        </div>
      </header>

      <InputBox onChange={onChange} onSubmit={onSubmit}></InputBox>

      <ImageDisplay imageUrl={imageUrl}></ImageDisplay>

      <PWABadge />
    </>
  );
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={appLogo} className="logo" alt="theDreamProject logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>theDreamProject</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <PWABadge />
//     </>
//   )
// }

// export default App
