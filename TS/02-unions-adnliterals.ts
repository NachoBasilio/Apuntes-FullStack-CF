let myFavoriteArtist = Math.random() > 0.5 ? "The Beatles" : 0;

// De manera automatica se infiere que myFavoriteArtist es de tipo string | number

let myFavoriteNumber: number | string = Math.random() > 0.5 ? 7 : "7";

// Usando el pipe | podemos definir que una variable puede ser de un tipo u otro de manera explicita.


if (typeof myFavoriteArtist === "string") {
  console.log(myFavoriteArtist.toUpperCase());
}

//Si no se hace la validación anterior, se generará un error en tiempo de compilación, ya que no se puede llamar a toUpperCase en un número.

// Type aliases

type favoriteArtist = string | number;

// Se puede definir un alias para un tipo de dato, de esta manera se puede reutilizar en diferentes partes del código.

type favoriteArtistObj = {
  name: favoriteArtist;
  id: number;
}

//Con esto se puede definir un objeto que tenga un nombre y un id, y se puede reutilizar en diferentes partes del código.
