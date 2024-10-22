"use client"

import {useParams, useRouter } from "next/navigation"

export default function PostPage(){
    const {id} = useParams()
    const router = useRouter()

    const handleNavigation = () => {
        router.back()//Con esto vamos a poder ir para taras.
    }

    return(
        <>
            <h2>Este es el blog con ID: {id}</h2>
            <button onClick={handleNavigation}>Atras</button>
        </>
    )
}