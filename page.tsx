"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function Home() {
  const router = useRouter();
  
  return (
    <div>
      <h1>Hi, this is the Next.js home page.</h1>
      <ul>
        <li><Link href="/about">Go to about page.</Link></li>
        <br />
        <li><Link href="/contact">Go to contact us page.</Link></li>
        <br />
        <li><Link href="/">Go to home page.</Link></li>
            
      </ul>






  <br /><br />
      <button onClick={()=> router.push("/about")}>Go to about page</button>
      <br/><br/>
      <button onClick={()=> router.push("/contact")}>Go to contact us page</button>
      <br/><br/>
      <button onClick={()=> router.push("/")}>Go to Home page.</button>
    
    
    
    </div>
  );
}

export default Home