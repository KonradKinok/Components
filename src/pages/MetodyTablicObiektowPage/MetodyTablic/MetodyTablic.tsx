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

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
export const MetodyTablicFind = () => {
  const przyklad1a = funkcjaFindPrzyklad1a(numbers);
  const przyklad1b = funkcjaFindPrzyklad1b(numbers);

  return (
    <div>
      <div>
        <h3>Przykład 1 .find:</h3>
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
    </div>
  );
};

function funkcjaFindPrzyklad1a(numbers: number[]) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
}

function funkcjaFindPrzyklad1b(numbers: number[]) {
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);
  return oddNumbers;
}
