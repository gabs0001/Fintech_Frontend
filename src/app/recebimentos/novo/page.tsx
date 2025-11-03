'use client';

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { navItems } from '@/data/nav';
import CtaFinanceiro from '@/components/shared/CtaFinanceiro';
import FormularioFinanceiro from '@/components/shared/FormularioFinanceiro';

export default function NovoRecebimentoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0c5270] text-white font-sans">
      <Header navItems={navItems} />

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-10">
        <section className="text-center mb-10">
          <CtaFinanceiro titulo="Cadastre aqui seu novo recebimento!" />
        </section>

        <FormularioFinanceiro tipo="recebimento" modo="novo" />
      </main>

      <Footer />
    </div>
  );
}