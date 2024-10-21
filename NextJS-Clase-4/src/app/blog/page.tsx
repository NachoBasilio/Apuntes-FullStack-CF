//Si pones un page.tsx en una carpeta lo trasforma en una ruta, es medio "Magia"
'use client'

import { useRouter } from 'next/navigation'



export default function Blog() {
  const router = useRouter()
  return (
    <div>
      <h1>Soy Blog</h1>
      <button onClick={() => router.back()}>
      Volver atrás
      </button>

    </div>
  );
}
