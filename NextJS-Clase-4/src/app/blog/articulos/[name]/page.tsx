//Esta ruta es dinamica, para hacer esto tenemos que poner [name] a la carpeta

export default function Name({params}: {params: {name:string}}) {

    const { name } = params

    return <h1>{name}</h1>;
}