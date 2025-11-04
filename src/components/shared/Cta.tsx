import { CtaProps } from '@/types/components';

export default function Cta({ destaque }: CtaProps) {
  const textoFinal = destaque?.trim() || 'registros';

  return (
    <section
      aria-label="Chamada principal"
      className="w-full flex justify-center mt-6 px-4"
    >
      <div className="max-w-4xl text-center">
        <p className="text-2xl font-semibold text-white">
          Aqui você encontra todos os seus <span className="text-teal-300">{textoFinal}</span>!
        </p>
      </div>
    </section>
  );
}