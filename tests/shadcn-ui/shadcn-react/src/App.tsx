import { useState } from "react";
import reactLogo from "./assets/react.svg";
import appLogo from "/favicon.svg";
import PWABadge from "./PWABadge.tsx";
import "./App.css";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={appLogo} className="logo inline" alt="shadcn-react logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react inline" alt="React logo" />
        </a>
      </div>
      <h1>shadcn-ui with React</h1>
      <br />
      <h2 className="text-red-500">Just not working rn* with React for some reason...</h2>
      <Avatar>
        <AvatarImage src="https://github.com/skywalkerSam/skywalkerSam.dev/blob/main/src/assets/Starboy.jpg">
          <AvatarFallback>Starboy</AvatarFallback>
        </AvatarImage>
      </Avatar>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PWABadge />
    </>
  );
}

export default App;
