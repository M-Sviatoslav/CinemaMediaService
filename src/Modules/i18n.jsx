import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          languageSelector: "English",
          header: {
            description:
              "A new experience of viewing the latest projects from around the world.",
            stat1: "years in the industry",
            stat2: "Movies",
            stat3: "Serials",
            stat4: "Support all devices",
          },
          sliderprew: {
            slidertext: "The hottest new",
          },
          subscribition: {
            SubsBlockTitle: "One subscription - a sea of content",
            SubsTitle: "Universal subscription",
            SubsDiscription:
              "Access to all possible content, as well as unlimited access to purchased products",
            ListTitle: "What’s included",
            ListEl1: "All movies",
            ListEl2: "Personal library",
            ListEl3: "All serials",
            ListEl4: "Individual selections",
            SubsBtnText: "Get access",
            SubsBtnDescription: "The subscription is monthly",
          },
          cardsection: {
            MainTitle: "Our advantages",
            card1Title: "Enjoy on your TV",
            card1Text:
              "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            card2Title: "Download your shows to watch offline",
            card2Text:
              "Save your favorites easily and always have something to watch.",
            card3Title: "Watch everywhere",
            card3Text:
              "Stream unlimited movies and TV shows on your phone, tablet, laptop,and TV.",
            card4Title: "Create profiles for kids",
            card4Text:
              "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
          },
          questionsblock: {
            questionsTitle: "Frequently Asked Questions",
            q1Main: "What is NOVA?",
            q1Answ:
              "NOVA is a streaming service offering various movies and shows.",
            q2Main: "Where can I watch?",
            q2Answ: "You can watch on any device that supports streaming.",
            q3Main: "What can I watch on NOVA?",
            q3Answ: "NOVA offers a variety of shows and movies across genres.",
            q4Main: "How much does NOVA cost?",
            q4Answ: "NOVA costs $19 per month.",
            q5Main: "How do I cancel?",
            q5Answ: "You can cancel anytime by visiting your account settings.",
          },
          registration: {
            Title:
              "Ready to watch? Enter your email to create or restart your membership.",
            Btn: "Get Started",
          },
          footer: {
            title:
              "Making the world a better place through<br></br>constructing elegant hierarchies.",
            li1: "Marketing",
            li2: "Blog",
            li3: "Commerce",
            li4: "Insights",
            li5: "Privacy",
            li6: "Documentation",
            li7: "Guides",
            li8: "About",
          },
        },
      },
      pl: {
        translation: {
          languageSelector: "Polski",
          header: {
            description:
              "Nowe doświadczenie oglądania najnowszych projektów z całego świata.",
            stat1: "lat w branży",
            stat2: "Kino",
            stat3: "Seriale",
            stat4: "Obsługuj wszystkie urządzenia",
          },
          sliderprew: {
            slidertext: "Najgorętsza nowość",
          },
          subscribition: {
            SubsBlockTitle: "Jedna subskrypcja – morze treści",
            SubsTitle: "Abonament uniwersalny",
            SubsDiscription:
              "Dostęp do wszystkich możliwych treści, a także nieograniczony dostęp do zakupionych produktów",
            ListTitle: "Co jest wliczone w cenę",
            ListEl1: "Wszystkie filmy",
            ListEl2: "Biblioteka osobista",
            ListEl3: "Wszystkie seriale",
            ListEl4: "Indywidualne wybory",
            SubsBtnText: "Uzyskaj dostęp",
            SubsBtnDescription: "Abonament jest miesięczny",
          },
          cardsection: {
            MainTitle: "Nasze zalety",
            card1Title: "Ciesz się na swoim telewizorze",
            card1Text:
              "Oglądaj na telewizorach Smart TV, Playstation, Xbox, Chromecast, Apple TV i Blu-ray gracze i nie tylko.",
            card2Title: "Pobierz swoje programy, aby oglądać je offline",
            card2Text:
              "Z łatwością zapisuj ulubione i zawsze masz coś do obejrzenia.",
            card3Title: "Oglądaj wszędzie",
            card3Text:
              "Przesyłaj strumieniowo nieograniczone filmy i programy telewizyjne na swój telefon, tablet, laptop,i telewizor.",
            card4Title: "Twórz profile dla dzieci",
            card4Text:
              "Wysyłaj dzieci na przygody z ich ulubionymi postaciami w kosmosie stworzone specjalnie dla nich — bezpłatnie w ramach członkostwa.",
          },
          questionsblock: {
            questionsTitle: "Często zadawane pytania",
            q1Main: "Co to jest NOVA?",
            q1Answ:
              "NOVA to usługa przesyłania strumieniowego oferująca różne filmy i programy.",
            q2Main: "Gdzie mogę obejrzeć?",
            q2Answ:
              "Możesz oglądać na dowolnym urządzeniu obsługującym transmisję strumieniową.",
            q3Main: "Co mogę obejrzeć w NOVA?",
            q3Answ:
              "NOVA oferuje różnorodne programy i filmy z różnych gatunków.",
            q4Main: "Ile kosztuje NOVA?",
            q4Answ: "NOVA kosztuje $19 dolarów miesięcznie.",
            q5Main: "Jak anulować?",
            q5Answ:
              "Możesz anulować subskrypcję w dowolnym momencie, odwiedzając ustawienia swojego konta.",
          },
          registration: {
            Title:
              "Gotowy do oglądania? Wpisz swój adres e-mail, aby utworzyć lub wznowić członkostwo.",
            Btn: "Rozpocznij",
          },
          footer: {
            title:
              "Czynimy świat lepszym miejscem poprzez<br></br>konstruowanie eleganckich hierarchii.",
            li1: "Marketing",
            li2: "Bloga",
            li3: "Handel",
            li4: "Spostrzeżenia",
            li5: "Prywatność",
            li6: "Dokumentacja",
            li7: "Przewodniki",
            li8: "About",
          },
        },
      },
    },
  });

export default i18n;
