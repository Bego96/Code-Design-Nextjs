import Image from "next/image";
import { SignIn } from "./components/sign-in/signIn";
import { auth } from "@/auth";
import { signOut } from "@/auth";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container />
    </main>
  );
}

export async function Container() {
  const session = await auth();

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
  );
}
