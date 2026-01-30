'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function ExempleComposantClient() {
  const router = useRouter();

  useEffect(() => {
    router.push("/acceuil"); 
  }, [router]);

  return null; 
}
