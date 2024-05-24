import NextAuth, { AuthError } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import error from "next/error";
// Your own logic for dealing with plaintext password strings; be careful!
//import { saltAndHashPassword } from "@/utils/password"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {strategy: "jwt"},
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email"},
        password: { label: "Password", type: "password"},
      },
      authorize: async (credentials) => {
        console.log({credentials})
        if (credentials.email === "begic.ismar96@gmail.com" && credentials.password === "RandomNpc") {
          return {name: "Ismar"}
        } else return null;
        
      },
    }),
  ],
})