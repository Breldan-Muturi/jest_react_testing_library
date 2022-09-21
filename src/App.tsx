import "./App.css";
import { AppProviders } from "./providers/app-providers";
import { Application } from "./components/application/Application";
import { Counter } from "./components/counter/counter";
import { Skills } from "./components/skills/skills";
import { MuiMode } from "./components/mui/mui-mode";
import { CounterTwo } from "./components/counter-two/counter-two";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={["HTML", "CSS"]} />
        <Counter />
        <MuiMode />
        <CounterTwo count={1} />
      </div>
    </AppProviders>
  );
}

export default App;
