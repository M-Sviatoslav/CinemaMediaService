import "./styles.css"
import Header from "./components/header";
import FilmSlider from "./components/slider";
import Subscriptions from "./components/subscriptions";
import Cards from "./components/cardsSection";

export default function App() {
  return (
    <div className="App">
         <Header/>
         <FilmSlider/>
         <Subscriptions/>
         <Cards/>
    </div>
  );
}
