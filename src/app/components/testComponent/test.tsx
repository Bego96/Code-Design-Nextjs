import { db } from '@/app/firebaseConfig';
import { auth } from '@/auth';
import { Firestore, doc, getDoc } from 'firebase/firestore';
import React from 'react'

export async function Test() {

    const session = await auth();
    const user = session?.user;

    console.log("USER" + user)
    if (user?.admin) {
        return (
            <div><p>Im for admins only</p>
            <img src={user?.image} />
            </div>
        )
    } else {
        return (
        
            <div><p>Im for user only because im not admin yet, </p>
            
        </div>
        )
        
    }
}
