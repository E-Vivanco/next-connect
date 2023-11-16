import {neon} from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL)
//console.log(sql `SELECT NOW()`)

export async function helloWorld(){
    const start = new Date()
    const [dbResponse]= await sql`SELECT NOW();`
    const dbNow = dbResponse && dbResponse.now ? dbResponse.now : ""
    const end = new Date()
    if(dbNow)
    return  {dbNow:"hello",dbNow: Math.abs(end - start )} //dbResponse
}

async function configureDatabase(){
    const dbResponse = await sql`
            CREATE TABLE IF NOT EXISTS "author"(
            "id" SERIAL NOT NULL,
            "nombre_author" text DEFAULT 'null'::text,
            "id_libro" integer UNIQUE,
            PRIMARY KEY(id)
    )`

    console.log("Db response for new table-1",dbResponse)
   // console.log("Db response for new table-2",dbResponse2)
}
configureDatabase().catch(err=>console.log("db config err",err))

export const runtime = 'edge' //nodejs
export const preferredRegion = 'iad1'

