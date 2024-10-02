const data: {
  name: string;
  age: number;
  email: string;
} = {
  name: 'Jorge',
  age: 30,
  email: 'jorge@mail.com'
}

const data2: {
  name: string;
  age: number;
  email: string;
} = {
  name: 'Nacho',
  age: 30,
  email: 'nacho@mail.com'
}

//Podemos crear un tipo de dato que se pueda reutilizar en diferentes partes del código.


type Person = {
  name: string;
  age: number;
  email: string;
}

const data3: Person = {
  name: 'Trini',
  age: 26,
  email: 'trini@mail.com'
}

//Parametros opcionales

type Person2 = {
  name: string;
  age: number;
  email?: string;
}

const data4: Person2 = {
  name: 'Rengar',
  age: 26
}

//Tipos anidados

type address = {
  street: string;
  city: string;
}

type Person3 = {
  name: string;
  age: number;
  email?: string;
  address: address;
}

const data5: Person3 = {
  name: 'Rengar',
  age: 26,
  address: {
    street: 'Calle falsa 123',
    city: 'Springfield'
  }
}

//Intersection types

type Address = {
  street: string;
  city: string;
}

type Phone = {
  phone: number;
}


type Person4 = {
  name: string;
  age: number;
  email?: string;
  address: Address;
} & Phone

// Los intersection types nos permiten combinar varios tipos de datos en uno solo.

const data6: Person4 = {
  name: 'Rengar',
  age: 26,
  address: {
    street: 'Calle falsa 123',
    city: 'Springfield'
  },
  phone: 123456789
}




