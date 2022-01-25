<h1 align="center">
    Lech Typer 🔵
</h1>

_Dostępne również w wersji po: [English](README.md)_

## O projekcie

Celem projektu było zaimplementowanie aplikacji internetowej z wykorzystaniem biblioteki [React](https://reactjs.org/) i bazy danych [Firebase](https://firebase.google.com/). Lech typer został stworzony z myślą o kibicach Lecha Poznań, gdyż pozwala obstawiać i śledzić na bieżąco wyniki wszystkich meczów ich ulubionego zespołu, a także rywalizować między sobą o miano najlepszego typera zbierając punkty za poprawne wytypowane wyniki.

Aby dołączyć do gry potrzeba stworzyć konto o unikalnej nazwie użytkownika i zweryfikowanym adresie email. Możliwe jest również zalogowanie się przy pomocy swojego konta na [Twitterze](https://twitter.com/). Dodatkowo stworzono konto testowe z ograniczoną funkcjonalnością pozwalające na przegląd aplikacji bez konieczności zakładania konta:

```
email: test@mailinator.com
hasło: test123
```

Projekt można zobaczyć pod tym adresem: [lech-typer.web.app](https://lech-typer.web.app/).

## Uruchamianie

W celu uruchomienia programu lokalnie, wymagany jest menadżer pakietów [npm](https://www.npmjs.com/) oraz skonfigurowanie połaczenia z bazą danych [Firebase](https://firebase.google.com/) tworząc plik `.env` z odpowiednimi indywidualnymi kluczami api.

1. Klonowanie repozytorium
   ```sh
   git clone https://github.com/filipciesielski7/Lech-Typer.git
   ```
2. Przejście do folderu _Lech-Typer_
   ```
   cd Lech-Typer
   ```
3. Uruchomienie poniższych komend w tym folderze:
   ```
   npm install
   npm start
   ```

Następnie aby zobaczyć stronę, należy udać się pod adres: http://localhost:3000/
