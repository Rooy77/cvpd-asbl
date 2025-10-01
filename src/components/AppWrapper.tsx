'use client';

import { usePathname } from 'next/navigation';
import HeaderP from './headerP';
import Header from './header';
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
