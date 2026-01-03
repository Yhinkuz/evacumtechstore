import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const saved = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
  const user = saved ? JSON.parse(saved) : null;

  if (!user || !user.isAdmin) {
    redirect('/login'); // Redirect non-admin users
  }

  return <div>{children}</div>;
}
