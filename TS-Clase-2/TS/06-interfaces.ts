interface IPerson {
  name: string;
  age: number;
  email?: string; // Propiedad opcional
}

const user: IPerson = {
  name: "Alice",
  age: 30,
};


interface ReadOnlyPerson {
  readonly id: number; // Propiedad inmutable
  name: string;
  age: number;
}

const user2: ReadOnlyPerson = {
  id: 1,
  name: "Alice",
  age: 30,
};

// user.id = 2; // Esto generaría un error, ya que 'id' es readonly
