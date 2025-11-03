'use client';

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { navItems } from '@/data/nav';
import CadastroForm from '@/components/cadastro/form/CadastroForm';

export default function CadastroPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0c5270] text-white font-sans">
      
      <Header
        navItems={ navItems }
      />

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-10">
        <section className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Antes de começarmos, precisamos de algumas informações básicas!
          </h2>
        </section>

        <CadastroForm />

      </main>

      <Footer />
    </div>
  );
}