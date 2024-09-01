import styles from './page.module.css'
import ExampleClient from "./components/ExampleClient"
import ExampleServer from './components/ExampleServer'
export default function page() {
  console.log("where do I render")
  return (
    <main className={styles.main}>
      <h2>Welcome👋</h2>
      <ExampleClient />
      <ExampleServer />
    </main>
  )
}