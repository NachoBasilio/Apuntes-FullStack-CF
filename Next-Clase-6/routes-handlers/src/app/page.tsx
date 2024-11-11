
import AddForm from "@/components/AddForm";
import styles from "./page.module.css";

export default function Home() {

  async function sendForm(formaData: FormData) {
    'use server';
    console.log('Formulario enviado');

    const body = {
      name: formaData.get('name'),
      age: formaData.get('age'),
      email: formaData.get('email'),
    }

    console.log(body);
  }

  return (
    <div>
      <h1 className={styles.title}>Routes Handlers</h1>
      <p className={styles.description}>Aprendiendo sobre Routes Handlers</p>
      <AddForm sendForm={sendForm}/>
    </div>
  );
}
