'use client';

import { JanelaPopUpProps } from '@/types/gastos';
import { useEscapeKey } from '@/hooks/useEscapeKey';

export default function JanelaPopUp({
  aberto,
  onFechar,
  onSalvar,
  campos,
  onChange,
}: JanelaPopUpProps) {
  useEscapeKey(onFechar);

  if (!aberto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popUpTitle"
      className="fixed top-1/2 left-1/2 z-[9999] max-w-[90%] sm:max-w-2xl w-full bg-teal-700 text-white rounded-md shadow-lg p-6 transform -translate-x-1/2 -translate-y-1/2"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSalvar();
        }}
        aria-label="Janela de edição de dados"
      >
        <div className="flex justify-between items-center">
          <h2 id="popUpTitle" className="text-xl font-semibold">
            Editar informações
          </h2>
          <button
            type="button"
            onClick={onFechar}
            className="text-2xl font-bold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
            aria-label="Fechar pop-up"
          >
            ×
          </button>
        </div>

        <div className="space-y-4 mt-6">
          {campos.map((campo) => (
            <div key={campo.nome}>
              <label htmlFor={`editar-${campo.nome}`} className="block text-sm font-medium mb-1">
                {campo.label}
              </label>

              {campo.tipo === 'textarea' ? (
                <textarea
                  id={`editar-${campo.nome}`}
                  name={`editar-${campo.nome}`}
                  rows={3}
                  value={campo.valor}
                  onChange={(e) => onChange(campo.nome, e.target.value)}
                  className="w-full rounded-md bg-[#343F57] text-white p-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              ) : (
                <input
                  id={`editar-${campo.nome}`}
                  name={`editar-${campo.nome}`}
                  type={campo.tipo}
                  value={campo.valor}
                  onChange={(e) =>
                    onChange(
                      campo.nome,
                      campo.tipo === 'number' ? Number(e.target.value) : e.target.value
                    )
                  }
                  readOnly={campo.readOnly}
                  className="w-full rounded-md bg-[#343F57] text-white p-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              )}
            </div>
          ))}

          <div className="flex justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={onFechar}
              className="bg-[#0aa6ab] hover:bg-[#075e61] text-white px-6 py-2 rounded-md transition-transform hover:scale-105"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-[#0aa6ab] hover:bg-[#075e61] text-white px-6 py-2 rounded-md transition-transform hover:scale-105"
            >
              Salvar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}