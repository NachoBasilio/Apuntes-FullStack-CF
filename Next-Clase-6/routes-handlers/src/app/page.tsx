import AddForm from "@/components/AddForm";
import styles from "./page.module.css";

export default function Home() {
  // Función server action para manejar el formulario
  async function sendForm(formData: FormData) {
    'use server';

    const body = {
      name: formData.get('name'),
      age: formData.get('age'),
      email: formData.get('email'),
    };

    console.log('Formulario enviado:', body);

    if (!body.name || !body.age || !body.email) {
      console.log('Faltan campos por llenar');
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Routes Handlers</h1>
      <p className={styles.description}>Aprendiendo sobre Routes Handlers</p>
      <AddForm action={sendForm} />
    </div>
  );
}
