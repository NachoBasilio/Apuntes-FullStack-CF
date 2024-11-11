export async function GET(req: Request, context: Context): Promise<Response> {
    const id = context.params.id
    return Response.json({data: {
        id: id,
        name: 'John Doe'
    }})
}

//Con el contexto podemos acceder a los parámetros de la URL