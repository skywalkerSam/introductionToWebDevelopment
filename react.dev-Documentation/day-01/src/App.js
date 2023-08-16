import { MyButton } from './MyButton.js';
import { AboutPage } from './About.js';
import { Profile } from './Profile.js';

export default function MyApp() {
  return (
    <div>
      <AboutPage></AboutPage>
      <Profile></Profile>
      <MyButton></MyButton>
    </div>
  );
}
