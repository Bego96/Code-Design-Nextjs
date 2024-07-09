import Image from "next/image";
import { auth } from "@/auth";
import { signOut } from "@/auth";
import Header from "./components/header/header";
import Brands from "./components/brands/brands";


export default function Home() {

  
  return (
    <div>
      <Header />
      <Brands />
    </div>
  );
}

