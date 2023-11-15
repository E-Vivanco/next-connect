import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({items:[
    {id:1,title:'World_1'},
    {id:2,title:'World_2'},
    {id:3,title:'World_3'}
    ]})
}

{/*export async function POST(){
    return NextResponse.json({items:[
    {id:1,title:'World_1'},
    {id:2,title:'World_2'},
    {id:3,title:'World_3'}
   ] })
}*/}