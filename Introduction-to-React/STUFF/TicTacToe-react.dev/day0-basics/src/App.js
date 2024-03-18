// Quick Start!

import { MyButton } from './MyButton.js';
import { AboutPage } from './About.js';
import { Profile } from './Profile.js';

export default function MyApp() {
  return (
    <div className='App'>
      <h1>Quick Start!</h1>
      <h2>- Creating and nesting components </h2>
      <h2>- Writing markup with JSX</h2>
      <h2>- Adding styles</h2>
      <h2>- Displaying data</h2>
      <br></br>
      <hr></hr>
      <AboutPage></AboutPage>
      <Profile></Profile>
      <MyButton></MyButton>
    </div>
  );
}
