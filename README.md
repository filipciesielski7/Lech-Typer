<h1 align="center">
    Lech Typer 🔵
</h1>

_Also available in: [Polski](README.pl.md)_

## About

The main goal of this project was to implement a web application using [React](https://reactjs.org/) for Lech Poznań football team fans through which they can predict their favourite team match results and compete with each other by collecting points for correct bets. All the results, points and bets are stored in the [Firebase](https://firebase.google.com/) realtime database.

In order to join the game you have to create an account with a unique username and verified email or log in by connecting your [Twitter](https://twitter.com/) account to the app. Additionally, a test account was also added through which you can check out limited functionality of the app without creating your own one:

```
email: test@mailinator.com
password: test123
```

The project runs online here: [lech-typer.web.app](https://lech-typer.web.app/)

## Getting Started

To run this website locally the [npm](https://www.npmjs.com/) package manager must be installed on your system and [Firebase](https://firebase.google.com/) connection properly configured by creating `.env` file with individual firebase api keys. In the projects directory:

1. Clone the repo
   ```sh
   git clone https://github.com/filipciesielski7/Lech-Typer.git
   ```
2. Navigate into the _Lech-Typer_ directory
   ```
   cd Lech-Typer
   ```
3. Run this commands in the root folder:
   ```
   npm install
   npm start
   ```

Then open http://localhost:3000/ to see the website.
