
export const fuseOptions = {
	// isCaseSensitive: false,
	includeScore: true,
	// shouldSort: true,
	includeMatches: true,
	// findAllMatches: false,
	minMatchCharLength: 1,
	location: 0,
	// threshold: 0.6,
	distance: 0,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		"title",
    "author.firstName",
    "author.lastName"
	]
};

export const fuseOptionsContacts = {
	// isCaseSensitive: false,
	includeScore: true,
	// shouldSort: true,
	includeMatches: true,
	// findAllMatches: true,
	minMatchCharLength: 1,
	// location: 0,
	threshold: 0.1,
	// distance: 100,
	// useExtendedSearch: true,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		"name",
    "number",
	]
};

interface Author {
  firstName: string;
  lastName: string;
}

export interface Book {
  title: string;
  author: Author;
}

export interface Contact {
 id: string;
 name: string;
 number: string;
}


export const listEgzampleObject: Book[] = [
  {
    title: "Old Man's War",
    author: {
      firstName: "John",
      lastName: "Scalzi",
    },
  },
  {
    title: "The Lock Artist",
    author: {
      firstName: "Steve",
      lastName: "Hamilton",
    },
  },
  {
    title: "HTML5",
    author: {
      firstName: "Remy",
      lastName: "Sharp",
    },
  },
  {
    title: "Right Ho Jeeves",
    author: {
      firstName: "P.D",
      lastName: "Woodhouse",
    },
  },
  {
    title: "The Code of the Wooster",
    author: {
      firstName: "P.D",
      lastName: "Woodhouse",
    },
  },
  {
    title: "Thank You Jeeves",
    author: {
      firstName: "P.D",
      lastName: "Woodhouse",
    },
  },
  {
    title: "The DaVinci Code",
    author: {
      firstName: "Dan",
      lastName: "Brown",
    },
  },
  {
    title: "Angels & Demons",
    author: {
      firstName: "Dan",
      lastName: "Brown",
    },
  },
  {
    title: "The Silmarillion",
    author: {
      firstName: "J.R.R",
      lastName: "Tolkien",
    },
  },
  {
    title: "Syrup",
    author: {
      firstName: "Max",
      lastName: "Barry",
    },
  },
  {
    title: "The Lost Symbol",
    author: {
      firstName: "Dan",
      lastName: "Brown",
    },
  },
  {
    title: "The Book of Lies",
    author: {
      firstName: "Brad",
      lastName: "Meltzer",
    },
  },
  {
    title: "Lamb",
    author: {
      firstName: "Christopher",
      lastName: "Moore",
    },
  },
  {
    title: "Fool",
    author: {
      firstName: "Christopher",
      lastName: "Moore",
    },
  },
  {
    title: "Incompetence",
    author: {
      firstName: "Rob",
      lastName: "Grant",
    },
  },
  {
    title: "Fat",
    author: {
      firstName: "Rob",
      lastName: "Grant",
    },
  },
  {
    title: "Colony",
    author: {
      firstName: "Rob",
      lastName: "Grant",
    },
  },
  {
    title: "Backwards, Red Dwarf",
    author: {
      firstName: "Rob",
      lastName: "Grant",
    },
  },
  {
    title: "The Grand Design",
    author: {
      firstName: "Stephen",
      lastName: "Hawking",
    },
  },
  {
    title: "The Book of Samson",
    author: {
      firstName: "David",
      lastName: "Maine",
    },
  },
  {
    title: "The Preservationist",
    author: {
      firstName: "David",
      lastName: "Maine",
    },
  },
  {
    title: "Fallen",
    author: {
      firstName: "David",
      lastName: "Maine",
    },
  },
  {
    title: "Monster 1959",
    author: {
      firstName: "David",
      lastName: "Maine",
    },
  },
];


export interface Contact {
 id: string;
 name: string;
 number: string;
}

export const contacts: Contact[] = [
  {
    "id": "66e5b7ecc495ed6e25f3544b",
    "name": "Akshay Koczera",
    "number": "600469278"
  },
  {
    "id": "66e5b405c495ed6e25f35435",
    "name": "Alexandrine Niemczyńska",
    "number": "504830731"
  },
  {
    "id": "66e5b78ac495ed6e25f35449",
    "name": "Amrik Sawina",
    "number": "511820710"
  },
  {
    "id": "66e5b5c1c495ed6e25f35440",
    "name": "Ann-Christinne Dworczak",
    "number": "509730860"
  },
  {
    "id": "66e5b57ac495ed6e25f3543f",
    "name": "Arron Kotaś",
    "number": "508920843"
  },
  {
    "id": "66e5b3a4c495ed6e25f35433",
    "name": "Cecil Rzepiela",
    "number": "502832093"
  },
  {
    "id": "66e5bba4c495ed6e25f35454",
    "name": "Chenyi Dryka",
    "number": "517027942"
  },
  {
    "id": "66e5b696c495ed6e25f35447",
    "name": "Ethel Łazarek",
    "number": "609483091"
  },
  {
    "id": "66e5b54bc495ed6e25f3543d",
    "name": "Hannah-Sophie Żak",
    "number": "506091084"
  },
  {
    "id": "66e5b248c495ed6e25f3542f",
    "name": "Judyta Dudek",
    "number": "602839232"
  },
  {
    "id": "66e5b61fc495ed6e25f35443",
    "name": "Kitana Taraszka",
    "number": "605920045"
  },
  {
    "id": "66e5bcd4c495ed6e25f35455",
    "name": "Klementyna Tulin",
    "number": "519004243"
  },
  {
    "id": "6710d729c495ed6e25f37470",
    "name": "Kontakt Tymczasowy",
    "number": "450900000"
  },
  {
    "id": "66e5b5e3c495ed6e25f35441",
    "name": "Lita Bartosiewicz",
    "number": "603608392"
  },
  {
    "id": "6710ca87c495ed6e25f3746d",
    "name": "Marek Powoda",
    "number": "632900854"
  },
  {
    "id": "66e5b801c495ed6e25f3544c",
    "name": "Maruta Nawacka",
    "number": "513821050"
  },
  {
    "id": "66e5b471c495ed6e25f35438",
    "name": "Milena Barcik",
    "number": "505820842"
  },
  {
    "id": "66e5b327c495ed6e25f35431",
    "name": "Necat Pyrzyk",
    "number": "500482682"
  },
  {
    "id": "66e5b67dc495ed6e25f35446",
    "name": "Ormiana Rychlewicz",
    "number": "608930290"
  },
  {
    "id": "66e5b3c1c495ed6e25f35434",
    "name": "Ragheb Parada",
    "number": "503592061"
  },
  {
    "id": "66e5b653c495ed6e25f35445",
    "name": "Saar Sosik",
    "number": "607402045"
  },
  {
    "id": "66e5b862c495ed6e25f3544e",
    "name": "Salakh Sarnik",
    "number": "515529004"
  },
  {
    "id": "66e5b88dc495ed6e25f35450",
    "name": "Suparjo Marecik",
    "number": "516430322"
  },
  {
    "id": "66e5b260c495ed6e25f35430",
    "name": "Tadzio Wojciechowski",
    "number": "603829481"
  },
  {
    "id": "66e5b499c495ed6e25f35439",
    "name": "Tharun Sprysak",
    "number": "506930184"
  },
  {
    "id": "66e5b37dc495ed6e25f35432",
    "name": "Thi Le Phuong Rocka",
    "number": "501649274"
  },
  {
    "id": "66e5b775c495ed6e25f35448",
    "name": "Vivienn Głodek",
    "number": "510481082"
  },
  {
    "id": "66e5b835c495ed6e25f3544d",
    "name": "Vladica Krzemień",
    "number": "514027181"
  },
  {
    "id": "66e5b226c495ed6e25f3542e",
    "name": "Wisia Kalinowska",
    "number": "601487213"
  },
  {
    "id": "66e5b63dc495ed6e25f35444",
    "name": "Xiaotian Bartoszewski",
    "number": "606820941"
  },
  {
    "id": "66e5b7bec495ed6e25f3544a",
    "name": "Yuejun Sobesto",
    "number": "511903482"
  }
];



