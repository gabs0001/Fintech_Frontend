type CtaFinanceiroProps = {
  titulo: string;
};

export default function CtaFinanceiro({ titulo }: CtaFinanceiroProps) {
  return (
    <section
      aria-label="Título da seção financeira"
      className="w-full text-center mt-6 px-4"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-white">
        {titulo}
      </h1>
    </section>
  );
}