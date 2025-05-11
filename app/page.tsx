import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      
      <div><Link href="/auth/signin">SignIn</Link></div>
      <div> <Link href="/auth/signup">SignUp</Link></div>
     
    </div>
  );
}
