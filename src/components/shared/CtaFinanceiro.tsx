type CtaFinanceiroProps = { titulo: string };

export default function CtaFinanceiro({ titulo }: CtaFinanceiroProps) {
  return (
    <h1 className="text-2xl sm:text-3xl font-bold">{ titulo }</h1>
  );
}