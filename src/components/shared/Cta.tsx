import { CtaProps } from "@/types/components";

export default function Cta({ destaque } : CtaProps) {
  return (
    <div className="w-full flex justify-center mt-6">
      <div className="max-w-4xl text-center">
        <p className="mx-5 text-2xl font-semibold text-white text-soft">
          Aqui você encontra todos os seus { destaque }!
        </p>
      </div>
    </div>
  );
}