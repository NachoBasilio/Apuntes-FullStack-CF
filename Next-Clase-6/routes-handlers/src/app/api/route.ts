
export async function GET(request: Request) {
    return Response.json({ message: 'GET' });
}

// No podemos exportar por defecto una función asíncrona como esta, por lo que no podemos usar el default export, esto nos va a dar un error.