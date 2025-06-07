import Link from "next/link";

export default function Header() {

  return (
    <header>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/about">Contact Us</Link></li>
          <li><Link href="/about">Another Nav</Link></li>
        </ul>
      </header>
  );
}

/**
 * 
 * <layout>
 *  <header>
 *  <main></main>
 * </header>
 * </layout>
 * 
 */