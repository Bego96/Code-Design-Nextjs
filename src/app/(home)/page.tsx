import Image from "next/image";
import { auth } from "@/auth";
import { signOut } from "@/auth";
import Header from "./components/header/header";


export default function Home() {

  
  return (
    <div>
      <Header />
    </div>
  );
}

