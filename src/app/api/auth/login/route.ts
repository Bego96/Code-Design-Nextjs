import { NextResponse } from 'next/server';
import {hash} from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    // validate login credentials
    console.log(email + " " + password)

    const hashedPassword = await hash(password, 10);

    //Put data into Firebase database
  } catch(e) {
    console.log(e)
  }

  return NextResponse.json({ message: "success"})
}
