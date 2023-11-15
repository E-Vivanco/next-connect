import { helloWorld ,configureDatabase} from "../lib/db"
//import configureDatabase from '../lib/db'

async function getData(){
  const endpoint ="http://localhost:3001/api/libros"
  const res = await fetch(endpoint)

  if (!res.ok){
    throw new Error("Fetch falla")
  }
  return res.json()
}

export default async function Libropage() {
    const dbhello = helloWorld()
    const dbhello2 =configureDatabase()
    console.log(dbhello)
    console.log(dbhello2)
    const data = await getData()
    const items = data && data.items ? [...data.items] : []
    console.log(items)
  return (
    <div>Libro-Page
        {JSON.stringify(dbhello)}
        {JSON.stringify(dbhello2)}
    </div>
  )
}
