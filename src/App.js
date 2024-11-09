import "./styles.css"
import Header from "./components/header";
import FilmSlider from "./components/slider";
import Subscriptions from "./components/subscriptions";
import Cards from "./components/cardsSection";
import Questions from "./components/questions";
import Footer from "./components/footer";
import Registration from "./components/registration";
import SliderPrev from "./components/sliderPreview";

export default function App() {
  return (
    <div className="App">
         <Header/>
         <SliderPrev/>
         <FilmSlider/>
         <Subscriptions/>
         <Cards/>
         <Questions/>
         <Registration/>
         <Footer/>
    </div>
  );
}
