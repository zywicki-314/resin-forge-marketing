# Resin Forge Marketing – App-like UX Experience

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css-modules&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 🚀 Live Demo
[resin-forge-marketing.vercel.app](https://resin-forge-marketing.vercel.app/)

## 📝 Opis projektu
**Resin Forge Marketing** to aplikacja webowa zaprojektowana w filozofii "App-not-Website". Głównym założeniem UX/UI było stworzenie interfejsu, który mieści się w całości na jednym ekranie (Single Screen UI), eliminując potrzebę tradycyjnego scrollowania i dając użytkownikowi poczucie korzystania z natywnej aplikacji desktopowej.

## ✨ Kluczowe rozwiązania techniczne

### 🌍 Zaawansowana Lokalizacja i Redux
Projekt implementuje niestandardowy system zmiany języka, który jest ściśle zintegrowany z adresem URL:
- **Stan Globalny:** Redux zarządza wybranym językiem aplikacji.
- **Synchronizacja z URL:** Wybór języka jest odzwierciedlony w adresie URL (np. `#lang=en`), co pozwala na zachowanie preferencji użytkownika nawet po odświeżeniu strony lub przesłaniu linku.
- **Persistence:** Wybrany język zostaje zachowany podczas nawigacji między podstronami dzięki synchronizacji Reduxa z routerem.

### 🏗 Architektura i Stylizacja
- **React Router:** Obsługa nawigacji wewnątrz aplikacji typu Single Page.
- **CSS Modules:** Wykorzystanie podejścia modułowego do stylowania, co zapewnia pełną izolację stylów, brak konfliktów w nazewnictwie klas i łatwiejsze utrzymanie kodu (Maintainability).
- **Single Screen Layout:** Interfejs zaprojektowany tak, aby optymalnie wykorzystywać przestrzeń roboczą bez konieczności przewijania strony.

## 🛠 Stos technologiczny
- **Frontend:** React (Hooks, Functional Components)
- **State Management:** Redux Toolkit (z logiką śledzenia zmian URL)
- **Routing:** React Router
- **Stylizacja:** CSS Modules / SASS
- **Deployment:** Vercel

## 💡 Czego uczy ten projekt?
Projekt ten był wyzwaniem w zakresie **synchronizacji stanu aplikacji z adresem URL**. Nauczył mnie, jak budować aplikacje, które są nie tylko estetyczne, ale przede wszystkim funkcjonalne i przewidywalne dla użytkownika (zachowanie stanu języka, intuicyjna nawigacja).

[Image of a dashboard application layout on a single screen]

## 🔧 Instalacja i uruchomienie
1. Sklonuj repozytorium:
   ```bash
   git clone [https://github.com/zywicki-314/resin-forge-marketing.git](https://github.com/zywicki-314/resin-forge-marketing.git)
