import Image from "next/image";
import { auth } from "@/auth";
import { signOut } from "@/auth";
import { Navigation } from "./components/navigation/navigation";

export default function Home() {
  return (
    <main className="">
      <Navigation />
    </main>
  );
}

export async function Container() {
  const session = await auth();
/*
  return (
    <div>
      {session && session.user ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign out</button>
        </form>
      ) : (
        <SignIn />
      )}
    </div>
  );*/

 
}
