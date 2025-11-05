'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

type RotaProtegidaProps = {
  children: React.ReactNode;
};

export default function RotaProtegida({ children }: RotaProtegidaProps) {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.replace('/login');
    }
  }, [token, router]);

  if(!token) return null;

  return <>{children}</>;
}