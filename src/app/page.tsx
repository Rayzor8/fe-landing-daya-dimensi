import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button>Button</Button>
      <Link href="/about">About</Link>
    </div>
  );
}
