import React, { useEffect, useMemo, useState } from "react";

import scss from "./KontekstWywolaniaFunkcji.module.scss";

export const KontekstWywolaniaFunkcji = () => {
  const mango = {
    username: "Mango",
    room: 27,
  };
  const customer = {
    username: "Jacob",
    sayHello() {
      return `Hello, ${this.username}!`;
    },
  };
  const customer2 = {
    firstName: "Jacob",
    lastName: "Mercer",
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  const greets = customer.sayHello.bind(customer);
  const przyklad2 = makeMessage(customer2.getFullName.bind(customer2));
  const a = () => {
    console.log(this);
  };
  function b() {
    a();
  }
  b.call({ user: "Mango" });
  return (
    <div className={scss["konteksWywolaniaFunkcji-mainContainer"]}>
      <h3>1. KontekstWywolaniaFunkcji</h3>
      <div>
        <hr className={`${scss["hr"]}`} data-label="CALL"></hr>
        <p>Sygnatura metody call() wygląda tak:</p>
        <pre>foo.call(thisArg, arg1, arg2, ...)</pre>
        <ul>
          <li>
            thisArg — obiekt, który chcemy ustawić jako kontekst (wartość this)
            dla funkcji
          </li>
          <li>
            arg1, arg2, ... — opcjonalne argumenty, które zostaną przekazane
            funkcji
          </li>
        </ul>
        <p>
          Metoda call wywołuje funkcję foo tak, że wartość this w funkcji będzie
          odnosić się do obiektu thisArg, i również przekazuje jej argumenty
          arg1, arg2 itd.
        </p>
        <pre>{greet.toString()}</pre>
        <pre>const mango = {JSON.stringify(mango, null, 2)}</pre>
        <p>
          Za pomocą metody call możemy wywołać funkcję greet tak, aby wartość
          this wskazywała na odpowiedni obiekt i wykorzystywała wartości jego
          właściwości.
        </p>
        <pre>greet.call(mango, "Welcome");</pre>
        <p>Wynik:{greet.call(mango, "Welcome")}</p>
      </div>
      <div>
        <hr className={`${scss["hr"]}`} data-label="APPLY"></hr>
        <p>Sygnatura metody apply() wygląda tak:</p>
        <pre>foo.apply(thisArg, [arg1, arg2, ...])</pre>
        <ul>
          <li>
            thisArg — obiekt, który chcemy ustawić jako kontekst (wartość this)
            dla funkcji.
          </li>
          <li>
            arg1, arg2, ... — opcjonalne argumenty, które zostaną przekazane
            funkcji
          </li>
        </ul>
        <p>
          Metoda apply wywołuje funkcję foo w taki sposób, że wartość this w
          funkcji będzie odnosić się do obiektu obj i przekaże elementy tablicy
          jako osobne argumenty arg1, arg2 itd.
        </p>
        <pre>{greet.toString()}</pre>
        <pre>const mango = {JSON.stringify(mango, null, 2)}</pre>
        <p>
          Za pomocą metody call możemy wywołać funkcję greet tak, aby wartość
          this wskazywała na odpowiedni obiekt i wykorzystywała wartości jego
          właściwości.
        </p>
        <pre>greet.apply(mango, ["Welcome"]);</pre>
        <p>Wynik:{greet.apply(mango, ["Welcome"])}</p>
      </div>
      <div>
        <hr className={`${scss["hr"]}`} data-label="BIND"></hr>
        <p>Sygnatura metody bind() wygląda tak:</p>
        <pre>const boundFoo = foo.bind(thisArg, arg1, arg2, ...)</pre>
        <ul>
          <li>
            thisArg — obiekt, który chcemy ustawić jako kontekst (wartość this)
            dla funkcji
          </li>
          <li>
            arg1, arg2, ... — opcjonalne argumenty, które zostaną przekazane
            funkcji
          </li>
        </ul>
        <p>
          Metoda bind tworzy i zwraca nową funkcję, która ma z góry ustalony
          kontekst, i ta nowa funkcja może być wywołana później z dowolnymi
          argumentami.
        </p>
        <p>Przykład 1:</p>
        <pre>{customer.sayHello.toString()}</pre>
        <pre>const customer = {JSON.stringify(customer, null, 2)}</pre>
        <p>
          Gdy używamy bind(), tworzymy nową funkcję greets. Ta nowa funkcja
          zawsze będzie miała poprawny kontekst i może używać właściwości
          username obiektu customer.
        </p>
        <pre>customer.sayHello();</pre>
        <p>Wynik: {customer.sayHello()}</p>
        <pre>const greets = customer.sayHello.bind(customer);</pre>
        <pre>greets();</pre>
        <p>Wynik: {greets()}</p>
        <p>Przykład 2:</p>
        <pre>{makeMessage.toString()}</pre>
        <pre>const customer2 = {JSON.stringify(customer2, null, 2)}</pre>
        <pre>{customer2.getFullName.toString()}</pre>
        <pre>makeMessage(customer2.getFullName.bind(customer2));</pre>
        <p>Wynik: {przyklad2}</p>
      </div>
    </div>
  );
};

function greet(this: { username: string; room: number }, str: string) {
  return `${str}, ${this.username}, your room is ${this.room}!`;
}

function makeMessage(callback: () => string) {
  const username = callback();
  return `Processing an application from ${username}`;
}
