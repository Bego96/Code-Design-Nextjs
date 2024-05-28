import { NextResponse } from 'next/server';
import {hash} from 'bcrypt';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/firebaseConfig';
export async function POST(request: Request) {
  try {
    const { first_name, last_name, email, password } = await request.json();
    // validate login credentials
  
    const hashedPassword = await hash(password, 10);

   
    //Put data into Firebase database
    const addToDb = await addDoc(collection(db, "users"), {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hashedPassword
    })
    return NextResponse.json({ message: "success"})
  } catch(e) {
    console.log(e)
    return NextResponse.json({ message: "error"})
  }
}
