//'use client'
import {helloWorld}  from "../lib/db"
import getDomain from "../lib/getDomain"
//import configureDatabase from '../lib/db'

async function getData(){
 const domain = getDomain() 
 const endpoint =`${domain}/api/libros`
 const res = await fetch(endpoint,{next:{revalidate: 20}})

  if (!res.ok){
    throw new Error("Fetch falla")
  }
  if(res.headers.get("content-type") !== "application/json"){
    return {items:[]}
  }
return res.json()
//return {items:[]}
}

export default async function Libropage() {
    const dbhello = helloWorld()
    //const dbhello2 =configureDatabase()
    console.log(dbhello)
   // console.log(dbhello2)
    const data =await getData()
    console.log(data)
    const items = data && data.items ? [...data.items] : []
    console.log(items)
    console.log(process.env.NEXT_PUBLIC_VERCEL_URL)
  return (
    <main><h1>Page-Libro</h1>
    {JSON.stringify(dbhello)}
        {items && items.map((item,idx)=>{
          return <li key={`index-${idx}`}>{item.title}</li>
        })}
    </main>
  )
}
