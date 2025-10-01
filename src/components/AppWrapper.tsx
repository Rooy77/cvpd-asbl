'use client';

import { usePathname } from 'next/navigation';
import Footer from './footer';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
    
     
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}
