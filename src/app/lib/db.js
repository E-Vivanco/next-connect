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

/*export async function configureDatabase(){
    const dbResponse =  sql`
        CREATE TABLE IF NOT EXISTS "libro"(
            "id" SERIAL NOT NULL,
           "_id" integer DEFAULT 0,
            "title" character varying(255) DEFAULT 'null'::text,
            "isbn" character varying(255) DEFAULT 'null'::text,
            "pagecount" integer DEFAULT 0,
            "publisheddate" date DEFAULT '1900-04-01'::date,
            "thumbnailurl" text DEFAULT 'null'::text,
            "shortdescription" text DEFAULT 'null'::text,
            "longdescription" text DEFAULT 'null'::text,
            "status" character varying(255) DEFAULT 'null'::text,
            "calificacion" integer DEFAULT 0,
            PRIMARY KEY(id)       
    )`

    const dbResponse2 = sql`
        CREATE TABLE IF NOT EXISTS "author"(
            "id" SERIAL NOT NULL,
            "nombre_author" text DEFAULT 'null'::text,
            "id_libro" integer,
            PRIMARY KEY(id)
    )
    CREATE UNIQUE INDEX author_id_libro_key ON "author" USING btree ("id_libro")
    )`

    console.log("Db response for new table-1",dbResponse,dbResponse2)
   // console.log("Db response for new table-2",dbResponse2)
}
configureDatabase().catch(err=>console.log("db config err",err))*/