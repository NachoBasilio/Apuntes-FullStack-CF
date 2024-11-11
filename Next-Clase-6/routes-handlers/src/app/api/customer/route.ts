

export async function GET(request: Request) {
    return Response.json({ data: 'Hello World' });
}

export async function POST(request: Request) {
    const body = await request.json();

    console.log(body);

    return Response.json({ data: body });
}