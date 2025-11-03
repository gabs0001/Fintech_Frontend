'use client';

import { useFormularioFinanceiro } from '@/hooks/useFormularioFinanceiro';
import { useCategoriaDinamica } from '@/hooks/useCategoriaDinamica';
import CampoNovaCategoria from './CampoNovaCategoria';
import { getCamposPorTipo } from '@/utils/camposFinanceiros';

type FormularioFinanceiroProps = {
  tipo: 'gasto' | 'recebimento' | 'investimento' | 'objetivo';
};

export default function FormularioFinanceiro({ tipo }: FormularioFinanceiroProps) {
  const { selectRef, campoRef, inputRef, adicionarCategoria } = useCategoriaDinamica({
    valorAlvo: 'outros',
    classeOpcao: `option-tipo-${tipo}`,
  });

  const { formData, handleChange, handleSubmit } = useFormularioFinanceiro(tipo);

  const campos = getCamposPorTipo(tipo);

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full sm:max-w-md bg-white/10 border border-white/20 rounded-xl p-6 space-y-6"
    >
      {campos.map((campo) => (
        <div key={campo.name} className="flex flex-col gap-2">
          <label htmlFor={campo.name} className="text-sm font-medium">
            {campo.label}
          </label>

          {campo.type === 'select' ? (
            <>
              <select
                ref={ selectRef }
                id={`tipo-${tipo}`}
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                required
                className="bg-white text-black px-3 py-2 rounded-md"
              >
                {campo.options?.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <CampoNovaCategoria
                campoRef={ campoRef }
                inputRef={ inputRef }
                adicionarCategoria={ adicionarCategoria }
              />
              
            </>
          ) : campo.type === 'textarea' ? (
            <textarea
              id={campo.name}
              name={campo.name}
              value={formData[campo.name]}
              onChange={handleChange}
              placeholder={campo.placeholder}
              rows={4}
              required
              className="bg-white text-black px-3 py-2 rounded-md"
            />
          ) : (
            <input
              id={campo.name}
              name={campo.name}
              type={campo.type}
              value={formData[campo.name]}
              onChange={handleChange}
              placeholder={campo.placeholder}
              required
              className="bg-white text-black px-3 py-2 rounded-md"
            />
          )}
        </div>
      ))}

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-full"
        >
          Adicionar { tipo }
        </button>
      </div>
    </form>
  );
}