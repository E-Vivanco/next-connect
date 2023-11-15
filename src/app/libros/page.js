import { helloWorld ,configureDatabase} from "../lib/db"
//import configureDatabase from '../lib/db'

export default function Libropage() {
    const dbhello = helloWorld()
    const dbhello2 =configureDatabase()
    console.log(dbhello)
    console.log(dbhello2)
  return (
    <div>Libro-Page
        {JSON.stringify(dbhello)}
        {JSON.stringify(dbhello2)}
    </div>
  )
}
