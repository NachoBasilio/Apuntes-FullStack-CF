// En TS podemos tipar los parametros y el retorno de una fucnion:

function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(2, 3);

// Tambien podemos tener parametros opcionales:

function createPerson(name: string, age: number, city?: string): object {
  return {
    name,
    age,
    city
  }
}

const person = createPerson('Rengar', 26);


async function makeRequest(url: string, method: string = 'GET'): Promise<any> {
  try {
    const response = await fetch(url, { method });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error en la petición: ${error.message}`);
  }
}
