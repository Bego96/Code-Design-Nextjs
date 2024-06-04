// api/auth/createCustomToken.ts
 // Ensure the correct path to your firebase initialization file
import { getAuth } from 'firebase-admin/auth';
import { NextResponse } from 'next/server';
import { adminAuth } from '@/app/firebaseAdmin';
export async function POST(request: Request) {
    try {
        
        const { id, email } = await request.json();

        let customToken;
        if (email === "begic.ismar96@gmail.com") {
            customToken = await adminAuth.createCustomToken(email);
        }

        console.log("Custom Token: ", customToken);
        return new Response(JSON.stringify({ customToken }), { status: 200 });
    } catch (error) {
        console.error("Error in createCustomToken API: ", error);
        return NextResponse.json({ message: "error" }, { status: 500 });
    }
}
