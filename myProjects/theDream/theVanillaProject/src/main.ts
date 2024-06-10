import "./style.css";
// import typescriptLogo from "./typescript.svg";
import appLogo from "/logo.png";
// import { setupCounter } from "./counter.ts";
import { initPWA } from "./pwa.ts";

const SERVER = "http://localhost:8080/test";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `
  <div>
    <a href="https://github.com/skywalkerSam" target="_blank">
      <img src="${appLogo}" class="logo" alt="App logo" />
    </a>
      <header>
        <h1>Image Generator</h1>
      </header>

      <div>
        <form>
          <!-- <label for="prompt">Prompt</label> -->
          <!-- maxlength="160" -->
          <textarea name="prompt" placeholder="Image Prompt..."></textarea>
          <button type="submit">Generate!</button>

        </form>
      </div>

      <div id="result">
        <!-- Generated Image -->
      </div>

  </div>
  <div
    id="pwa-toast"
    role="alert"
    aria-labelledby="toast-message"
  >
    <div class="message">
      <span id="toast-message"></span>
    </div>
    <div class="buttons">
        <button id="pwa-refresh" type="button">
          Reload
        </button>
        <button id="pwa-close" type="button">
          Close
        </button>
    </div>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch(SERVER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: data.get("prompt"),
    }),
  });

  const image = await response.json();
  console.log(image);
  const result = document.querySelector("#result");
  result.innerHTML = `<img src="${image.imageUrl}" width="1024" />`;
});

function showSpinner() {
  const button = document.querySelector('button');
  button.disabled = true;
  button.innerHTML = 'Dreaming... <span class="spinner">🧠</span>';
}

function hideSpinner() {
  const button = document.querySelector('button');
  button.disabled = false;
  button.innerHTML = 'Dream';
}

initPWA(app);
