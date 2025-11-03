'use client';

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { navItems } from '@/data/nav';
import LoginForm from '@/components/login/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0c5270] text-white font-sans">
      <Header 
        navItems={ navItems } 
      />

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-10">
        
        <section className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Bem-vindo de volta! Faça login para acessar sua conta.
          </h2>
        </section>

        <LoginForm />

      </main>

      <Footer />
    </div>
  );
}