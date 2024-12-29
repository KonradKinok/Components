export interface ContactsTableSource{
  id: string;
  name: string;
  email: string;
  phone: string;
  courses: string[];
}

export const contactsTableSource:ContactsTableSource[] = [
  {
    "id": "AeHIrLTr6JkxGE6SN-0Rw",
    "name": "Allen Raymond",
    "email": "nulla.ante@vestibul.co.uk",
    "phone": "(992) 914-3792",
    "courses": ["matematyka", "fizyka"]
  },
  {
    "id": "drsAJ4SHPYqZeG-83QTVW",
    "name": "Kennedy Lane",
    "email": "mattis.Cras@nonenimMauris.net",
    "phone": "(542) 451-7038",
    "courses": ["polski", "matematyka"]
  },
  {
    "id": "vza2RIzNGIwutCVCs4mCL",
    "name": "Wylie Pope",
    "email": "est@utquamvel.net",
    "phone": "(692) 802-2949",
    "courses": ["fizyka", "biologia"]
  },
  {
    "id": "05olLMgyVQdWRwgKfg5J6",
    "name": "Cyrus Jackson",
    "email": "nibh@semsempererat.com",
    "phone": "(501) 472-5218",
    "courses": ["chemia", "polski"]
  },
  {
    "id": "1DEXoP8AuCGYc1YgoQ6hw",
    "name": "Abbot Franks",
    "email": "scelerisque@magnis.org",
    "phone": "(186) 568-3720",
    "courses": ["polski", "informatyka"]
  },
  {
    "id": "Z5sbDlS7pCzNsnAHLtDJd",
    "name": "Reuben Henry",
    "email": "pharetra.ut@dictum.co.uk",
    "phone": "(715) 598-5792",
    "courses": ["informatyka", "wf"]
  },
  {
    "id": "C9sjBfCo4UJCWjzBnOtxl",
    "name": "Simon Morton",
    "email": "dui.Fusce.diam@Donec.com",
    "phone": "(233) 738-2360",
    "courses": ["wf", "fizyka"]
  },
  {
    "id": "e6ywwRe4jcqxXfCZOj_1e",
    "name": "Thomas Lucas",
    "email": "nec@Nulla.com",
    "phone": "(704) 398-7993",
    "courses": ["fizyka", "polski"]
  },
  {
    "id": "rsKkOQUi80UsgVPCcLZZW",
    "name": "Alec Howard",
    "email": "Donec.elementum@scelerisquescelerisquedui.net",
    "phone": "(748) 206-2688",
    "courses": ["biologia", "polski"]
  }
]

//Przykład1
export const planets = ["Earth", "Mars", "Venus", "Jupiter"];

export interface Books{
  title: string;
  author: string;
  rating: number;
}

//Przykład2
export const books:Books[] = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67
  },
];

export interface BooksFlatMap{
  title: string;
  author: string;
  genres: string[];
}

//Przykład2
export const booksFlatMap:BooksFlatMap[] = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

export interface Users{
  name: string;
  email: string;
  eyeColor: string;
  friends: string[];
  isActive: boolean;
  balance: number;
  skills: string[];
  gender: string;
  age: number;
}

export const users:Users[] =
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];