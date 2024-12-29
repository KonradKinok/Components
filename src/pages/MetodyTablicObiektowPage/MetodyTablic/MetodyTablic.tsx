import React, { useEffect, useState } from "react";
import {
  planets,
  type Books,
  books,
  type BooksFlatMap,
  booksFlatMap,
  type Users,
  users,
} from "../db/contactsTableSource";
import { dividerClasses } from "@mui/material";
export const MetodyTablic = () => {
  const [przyklad1, setPrzyklad1] = useState(funkcjaPrzyklad1(planets));
  const przyklad2 = funkcjaPrzyklad2(books);
  const przyklad3 = funkcjaPrzyklad3(booksFlatMap);
  const przyklad4 = funkcjaPrzyklad4(users);

  useEffect(() => {}, []);

  return (
    <div>
      <div>
        <h3>Przykład 1 .map:</h3>
        <p>
          Tablica planets zawiera nazwy planet. Dopełnij kod tak, aby zmienna
          planetsLengths zawierała tablicę składającą się z długości nazw każdej
          planety w tablicy planets. Należy użyć metody map().
        </p>
        <p>const planets = ["Earth", "Mars", "Venus", "Jupiter"];</p>
        <p>{`const planetsLengths = planets.map((planet) => planet.length);`}</p>
        <p>Wynik: [{przyklad1.join(", ")}]</p>
        <p>Docelowy wynik: [5, 4, 5, 7]</p>
      </div>
      <div>
        <h3>Przykład 2 .map:</h3>
        <p>
          Tablica books zawiera kolekcję obiektów książek, z których każdy
          zawiera właściwości title, author, rating. Używając metody map(),
          spraw, aby zmienna titles zawierała tablicę tytułów wszystkich książek
          (właściwość title) z tablicy books.
        </p>
        <p>
          Wartością zmiennej titles jest tablica ["The Last Kingdom", "Beside
          Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood",
          "Enemy of God"]
        </p>
        <p>Wynik: {przyklad2.join(", ")}</p>
      </div>
      <div>
        <h3>Przykład 3 .flatMap:</h3>
        <p>
          Tablica books zawiera kolekcję obiektów książek, z których każdy
          zawiera właściwość genres, której wartością jest tablica gatunków.
          Używając metody flatMap(), spraw by zmienna genres zawierała tablicę
          gatunków wszystkich książek (właściwość genres) z tablicy books.
        </p>
        <p>
          Wartością zmiennej genres jest tablica ["adventure", "history",
          "fiction", "horror", "mysticism"]
        </p>
        <p>Wynik: {przyklad3.join(", ")}</p>
      </div>
      <div>
        <h3>Przykład 4 .map:</h3>
        <p>
          Dopełnij funkcję strzałkową getUserEmails(users) tak, aby zwracała
          tablicę adresów email użytkowników (właściwość email) z tablicy
          obiektów w parametrze users.
        </p>
        <p>
          Wywołanie funkcji z określoną tablicą użytkowników zwraca tablicę
          ["moorehensley@indexia.com", "sharlenebush@tubesys.com",
          "rossvazquez@xinware.com", "elmahead@omatom.com",
          "careybarr@nurali.com", "blackburndotson@furnigeer.com",
          "shereeanthony@kog.com"]
        </p>
        <p>Wynik: {przyklad4.join(", ")}</p>
      </div>
    </div>
  );
};

function funkcjaPrzyklad1(planets: string[]) {
  const planetsLengths = planets.map((planet) => planet.length);
  return planetsLengths;
}

function funkcjaPrzyklad2(books: Books[]) {
  const titles = books.map((book) => book.title);
  return titles;
}

function funkcjaPrzyklad3(books: BooksFlatMap[]) {
  const genres = books.flatMap((book) => book.genres);
  return genres;
}

function funkcjaPrzyklad4(users: Users[]) {
  const emails = users.map((user) => user.email);
  return emails;
}

//MetodyTablicFilter
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
export const MetodyTablicFilter = () => {
  const przyklad1a = funkcjaFilterPrzyklad1a(numbers);
  const przyklad1b = funkcjaFilterPrzyklad1b(numbers);
  const przyklad2a = funkcjaFilterPrzyklad2a(books, MIN_RATING);
  const przyklad2b = funkcjaFilterPrzyklad2b(books, AUTHOR);
  const przyklad3 = funkcjaFilterPrzyklad3(users, "blue");
  const przyklad4 = funkcjaFilterPrzyklad4(users, 20, 30);
  return (
    <div>
      <div>
        <h3>Przykład 1 .filter:</h3>
        <p>
          Dopełnij kod tak, aby zmienna evenNumbers zawierała tablicę liczb
          parzystych z tablicy numbers, a zmienna oddNumbers zawierała tablicę
          liczb nieparzystych. Pamiętaj, aby używać metody filter().
        </p>
        <p>const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];</p>
        <p>{`const evenNumbers = numbers.filter((number) => number % 2 === 0);`}</p>
        <p>Wynik: [{przyklad1a.join(", ")}]</p>
        <p>Wartością zmiennej evenNumbers jest tablica [24, 82, 36, 18, 52]</p>
        <p>{`const oddNumbers = numbers.filter((number) => number % 2 !== 0);`}</p>
        <p>Wynik: [{przyklad1b.join(", ")}]</p>
        <p>Wartością zmiennej oddNumbers jest tablica [17, 61, 47, 73]</p>
      </div>
      <div>
        <h3>Przykład 2 .filter:</h3>
        <p>
          Tablica books zawiera kolekcję obiektów książek, z których każdy
          zawiera właściwości title, author, rating. Używając metody filter(),
          dopełnij kod tak, aby: W zmiennej topRatedBooks znalazła się tablica
          książek, których ocena (właściwość rating) jest większa lub równa
          wartości zmiennej MIN_RATING. W zmiennej booksByAuthor znalazła się
          tablica książek napisanych przez autora o nazwisku (właściwość author)
          pasującym do wartości w zmiennej AUTHOR.
        </p>
        <p>{`const topRatedBooks = books.filter((book) => book.rating > minRating);`}</p>
        <p>Wynik: {przyklad2a.join(", ")}</p>
        <p>
          Wartość zmiennej topRatedBooks jest tablicą książek z ratingiem
          powyżej 8
        </p>
        <p>{`booksByAuthor = books.filter((book) => book.author == author);`}</p>
        <p>Wynik: {przyklad2b.join(", ")}</p>
        <p>
          Wartością zmiennej booksByAuthor jest tablica książek, których autorem
          jest "Bernard Cornwell"
        </p>
      </div>
      <div>
        <h3>Przykład 3 .filter:</h3>
        <p>
          Dopełnij funkcję getUsersWithEyeColor(users, color) tak, aby zwracała
          tablicę użytkowników, których kolor oczu (właściwość eyeColour) zgadza
          się z wartością drugiego parametru colour.
        </p>
        <p>{`const getUsersWithEyeColor = users.filter((user) => user.eyeColor == color);`}</p>
        <p>Wynik: {przyklad3.join(", ")}</p>
        <p>
          Jeśli parametr color to blue, funkcja zwraca tablicę obiektów
          użytkowników o nazwach Moore Hensley, Sharlene Bush i Carey Barr
        </p>
      </div>
      <div>
        <h3>Przykład 4 .filter:</h3>
        <p>
          Dopełnij kodu do funkcji getUsersWithAge(users, minAge, maxAge), aby
          zwrócić tablicę użytkowników, których wiek (przechowywany we
          właściwości age) należy do określonego zakresu od minAge do maxAge.
        </p>
        <p>{`const getUsersWithAge = users.filter(
    (user) => user.age >= minAge && user.age <= maxAge,
  );`}</p>
        <p>Wynik: {przyklad4.join(", ")}</p>
        <p>
          Jeśli wartości parametrów minAge i maxAge wynoszą odpowiednio 20 i 30,
          funkcja zwraca tablicę obiektów użytkowników o nazwach Ross Vazquez,
          Elma Head, Carey Barr
        </p>
      </div>
    </div>
  );
};

function funkcjaFilterPrzyklad1a(numbers: number[]) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
}

function funkcjaFilterPrzyklad1b(numbers: number[]) {
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);
  return oddNumbers;
}

function funkcjaFilterPrzyklad2a(books: Books[], minRating: number) {
  const topRatedBooks = books.filter((book) => book.rating > minRating);
  return topRatedBooks.map((book) => `${book.title} (${book.rating})`);
}
function funkcjaFilterPrzyklad2b(books: Books[], author: string) {
  const booksByAuthor = books.filter((book) => book.author == author);
  return booksByAuthor.map((book) => `${book.title} (${book.author})`);
}

function funkcjaFilterPrzyklad3(users: Users[], color: string) {
  const getUsersWithEyeColor = users.filter((user) => user.eyeColor == color);
  return getUsersWithEyeColor.map((user) => `${user.name} (${user.eyeColor})`);
}

function funkcjaFilterPrzyklad4(
  users: Users[],
  minAge: number,
  maxAge: number,
) {
  const getUsersWithAge = users.filter(
    (user) => user.age >= minAge && user.age <= maxAge,
  );
  return getUsersWithAge.map((user) => `${user.name} (${user.age})`);
}

//MetodyTablicFind

export const MetodyTablicFind = () => {
  const BOOK_TITLE = "The Dream of a Ridiculous Man";
  const AUTHOR = "Robert Sheckley";

  const przyklad1a = funkcjaFindPrzyklad1a(books, BOOK_TITLE);
  const przyklad1b = funkcjaFindPrzyklad1b(books, AUTHOR);
  const przyklad2 = funkcjaFindPrzyklad2(users, "shereeanthony@kog.com");
  return (
    <div>
      <div>
        <h3>Przykład 1 .find:</h3>
        <p>
          Używając metody find(), dopełnij kod tak, aby: W zmiennej
          bookWithTitle został utworzony obiekt książki, której nazwa
          (właściwość title) odpowiada wartości zmiennej BOOK_TITLE. W zmiennej
          bookByAuthor został utworzony obiekt książki, którego autor
          (właściwość author) odpowiada wartości zmiennej AUTHOR.
        </p>
        <p>{`const bookWithTitle = books.find((book) => book.title === bookTitle);`}</p>
        <p>Wynik: {przyklad1a}</p>
        <p>
          Wartością zmiennej bookWithTitle jest obiekt książki o nazwie "The
          Dream of a Ridiculous Man"
        </p>
        <p>{`const bookByAuthor = books.find((book) => book.author === author);`}</p>
        <p>Wynik: {przyklad1b}</p>
        <p>
          Wartością zmiennej bookByAuthor jest obiekt książki autora "Robert
          Sheckley"
        </p>
      </div>
      <div>
        <h3>Przykład 2 .find:</h3>
        <p>
          Dopełnij funkcję getUserWithEmail(users, email) tak, aby zwracała
          obiekt użytkownika, którego email (właściwość email) zgadza się z
          wartością drugiego parametru email.
        </p>
        <p>{`const getUserWithEmail = users.find((user) => user.email === email);`}</p>
        <p>Wynik: {przyklad2}</p>
        <p>
          Jeśli wartością parametru email jest "shereeanthony@kog.com", funkcja
          zwraca obiekt użytkownika o nazwie Sheree Anthony
        </p>
      </div>
    </div>
  );
};

function funkcjaFindPrzyklad1a(books: Books[], bookTitle: string) {
  const bookWithTitle = books.find((book) => book.title === bookTitle);
  return bookWithTitle ? `${bookWithTitle.title}` : undefined;
}
function funkcjaFindPrzyklad1b(books: Books[], author: string) {
  const bookByAuthor = books.find((book) => book.author === author);
  return bookByAuthor ? `${bookByAuthor.author}` : undefined;
}

function funkcjaFindPrzyklad2(users: Users[], email: string) {
  const getUserWithEmail = users.find((user) => user.email === email);
  return getUserWithEmail
    ? `${getUserWithEmail.name} (${getUserWithEmail.email})`
    : undefined;
}

export const MetodyTablicEvery = () => {
  return (
    <div>
      <div>
        <h3>Przykład 1 .every:</h3>
        <p>
          Dopełnij funkcję getUserWithEmail(users, email) tak, aby zwracała
          obiekt użytkownika, którego email (właściwość email) zgadza się z
          wartością drugiego parametru email.
        </p>
        <p>{`const getUserWithEmail = users.find((user) => user.email === email);`}</p>
        <p>Wynik: {przyklad2}</p>
        <p>
          Jeśli wartością parametru email jest "shereeanthony@kog.com", funkcja
          zwraca obiekt użytkownika o nazwie Sheree Anthony
        </p>
      </div>
    </div>
  );
};
