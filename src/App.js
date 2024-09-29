import "./styles.css"
import Header from "./components/header";
import FilmSlider from "./components/slider";
import Subscriptions from "./components/subscriptions";

export default function App() {
  return (
    <div className="App">
         <Header/>
         <FilmSlider/>
         <Subscriptions/>
    </div>
  );
}
