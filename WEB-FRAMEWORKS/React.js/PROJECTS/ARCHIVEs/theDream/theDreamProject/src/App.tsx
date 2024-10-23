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
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";

const SERVER = "http://localhost:8080/image";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  function onChange(event) {
    console.log(event.target.value);
    setPrompt(event.target.value);
  }

  async function onSubmit() {
    setLoading(true);
    try {
      const response = await fetch(SERVER, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      // error
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      // response
      // console.log(response);
      // console.log(response.headers);
      const data = await response.json();

      // error alert
      if (data.message) {
        console.log(data.message);
        alert(data.message);
      }

      // imageUrl
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // async function onSubmit() {
  //   setLoading(true);
  //   try {
  //     await fetch(SERVER, {
  //       method: "post",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         prompt: prompt,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((response) => console.log(response));
  //     // .then((response) => setImageUrl(response))
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   // if (response.ok){
  //   //   setImageUrl(response)
  //   //   console.log(response)
  //   //   console.log(imageUrl)
  //   // } else {
  //   //   const error = await response.text();
  //   //   console.error(error)
  //   //   alert(error)
  //   // }
  //   setLoading(false);
  // }

  return (
    <>
      <ErrorBoundary>
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
              <em>with OPENAI's</em> <strong>Dall.E 3</strong>
            </p>
          </div>
        </header>

        <InputBox
          onChange={onChange}
          onSubmit={onSubmit}
          loading={loading}
        ></InputBox>

        <ImageDisplay imageUrl={imageUrl}></ImageDisplay>

        <PWABadge />
      </ErrorBoundary>
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
