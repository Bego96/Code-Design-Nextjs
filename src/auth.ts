import NextAuth, { AuthError } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import error from "next/error";
import { getDocs, collection, doc, getDoc, query, where, } from "firebase/firestore";
import { db } from "./app/firebaseConfig";

declare module "next-auth" {
  interface User {
    
    admin: boolean | null;
    lastName: string | null;
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
   
    admin: boolean | null;
    lastName: string | null;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {strategy: "jwt"},
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email"},
        password: { label: "Password", type: "password"},
      },
      authorize: async (credentials): Promise<any> => {
        

        let users = collection(db, "users")
      let findUserByEmail = query(users, where("email", "==", credentials.email), where("password", "==", credentials.password))
      let querySnapshot = await getDocs(findUserByEmail);
      let userInfo: any = null;
    
      // Check if any documents were returned
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          // Extract document data and include the document ID
          userInfo = { id: doc.id, ...doc.data() };
       
        });
      } else {
        console.log("No user found with the provided email");
      }



        if (credentials.email === userInfo.email && credentials.password === userInfo.password) {
          return {email: credentials.email, admin: true}
        } else throw new Error("Invalid email or password");
        
      },
    }),
  ],
  callbacks:{
    async session({token, session}) {
      // Extract user information by quering by his/her email
      let users = collection(db, "users")
      let findUserByEmail = query(users, where("email", "==", token.email))
      let querySnapshot = await getDocs(findUserByEmail);
      let userInfo: any = null;
    
      // Check if any documents were returned
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          // Extract document data and include the document ID
          userInfo = { id: doc.id, ...doc.data() };
       
        });
      } else {
        console.log("No user found with the provided email");
      }
     
      // After extracting user info by email set user role to the actual session if user info has role assigned
      if (userInfo.admin) {
        session.user.admin = userInfo.admin
      }
      
      session.user.image = userInfo.image
      session.user.name = userInfo.first_name
      session.user.lastName = userInfo.last_name

      return session;
    },
   async jwt({ token, user}) {
    // Extract user information by quering by his/her email
    const email = token.email;
    let users = collection(db, "users")
    let findUserByEmail = query(users, where("email", "==", token.email))
    let querySnapshot = await getDocs(findUserByEmail);
    let userInfo: any = null;
  
    // Check if any documents were returned
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        // Extract document data and include the document ID
        userInfo = { id: doc.id, ...doc.data() };
     
      });
    } else {
      console.log("No user found with the provided email");
    }

    //After user extraction set role of user to token
    token.admin = userInfo.admin
    token.image = userInfo.image
    token.name = userInfo.first_name
    token.lastName = userInfo.last_name
    return token;
   }
  },
})