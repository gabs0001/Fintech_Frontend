'use client';

import { useEffect, useState } from 'react';
import { useFormularioFinanceiro } from '@/hooks/useFormularioFinanceiro';
import { useCategoriaDinamica } from '@/hooks/useCategoriaDinamica';
import CampoNovaCategoria from './CampoNovaCategoria';
import { getCamposPorTipo } from '@/utils/camposFinanceiros';
import { useAuth } from '@/contexts/AuthContext';
import {
  listarCategoriasGasto,
  cadastrarCategoriaGasto,
} from '@/services/categoriaGastoService';
import { listarTiposInvestimento } from '@/services/tipoInvestimentoService';
import { listarInstituicoes } from '@/services/instituicaoService';
import { listarTiposRecebimento } from '@/services/tipoRecebimento';

type FormularioFinanceiroProps = {
  tipo: 'gasto' | 'recebimento' | 'investimento' | 'objetivo';
  modo?: 'novo' | 'editar';
  gasto?: any;
};

export default function FormularioFinanceiro({
  tipo,
  modo = 'novo',
  gasto,
}: FormularioFinanceiroProps) {
  const { token } = useAuth();
  const { formData, handleChange, handleSubmit } = useFormularioFinanceiro({ tipo, modo, gasto });

  const { selectRef, campoRef, inputRef } = useCategoriaDinamica({
    valorAlvo: 'outros',
    classeOpcao: `option-tipo-${tipo}`,
  });

  const campos = getCamposPorTipo(tipo);
  const [opcoesDinamicas, setOpcoesDinamicas] = useState<Record<string, string[]>>({});

  useEffect(() => {
    if (!token) return;

    const carregarOpcoes = async () => {
      const novasOpcoes: Record<string, string[]> = {};

      for (const campo of campos) {
        if (campo.type !== 'select' || !campo.api) continue;

        try {
          let resultado: any[] = [];

          if (campo.api === 'categorias-gasto') {
            resultado = await listarCategoriasGasto(token) as any[];
            novasOpcoes[campo.name] = resultado.map((c) => c.nome);
          }

          if (campo.api === 'tipos-investimentos') {
            resultado = await listarTiposInvestimento(token)as any[];
            novasOpcoes[campo.name] = resultado.map((t) => t.nome);
          }

          if (campo.api === 'instituicoes') {
            resultado = await listarInstituicoes(token)as any[];
            novasOpcoes[campo.name] = resultado.map((i) => i.nome);
          }

          if (campo.api === 'tipos-recebimento') {
            resultado = await listarTiposRecebimento(token)as any[];
            novasOpcoes[campo.name] = resultado.map((r) => r.nome);
          }
        } catch (err) {
          console.error(`Erro ao carregar opções para ${campo.name}:`, err);
        }
      }

      setOpcoesDinamicas(novasOpcoes);
    };

    carregarOpcoes();
  }, [token, tipo]);

  const adicionarCategoria = async () => {
    const nome = inputRef.current?.value?.trim();
    if (!nome || !token) return;

    try {
      await cadastrarCategoriaGasto({ nome }, token);
      setOpcoesDinamicas((prev) => ({
        ...prev,
        categoria: [...(prev.categoria || []), nome],
      }));
      if (inputRef.current) inputRef.current.value = '';
      campoRef.current?.classList.add('hidden');
    } catch (err) {
      console.error('Erro ao adicionar nova categoria:', err);
    }
  };

  const toggleCampoCategoria = (campoNome: string, valor: string) => {
    if (campoNome === 'categoria' && valor === 'outros') {
      campoRef.current?.classList.remove('hidden');
    } else {
      campoRef.current?.classList.add('hidden');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label={`Formulário de ${modo === 'editar' ? 'edição' : 'criação'} de ${tipo}`}
      className="mx-auto w-full sm:max-w-md bg-white/10 border border-white/20 rounded-xl p-6 space-y-6"
    >
      {campos.map((campo) => (
        <div key={campo.name} className="flex flex-col gap-2">
          <label htmlFor={campo.name} className="text-sm font-medium text-white">
            {campo.label}
          </label>

          {campo.type === 'select' ? (
            <>
              <select
                ref={campo.name === 'categoria' ? selectRef : undefined}
                id={campo.name}
                name={campo.name}
                value={formData[campo.name]}
                onChange={(e) => {
                  handleChange(e);
                  toggleCampoCategoria(campo.name, e.target.value);
                }}
                required
                className="bg-white text-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="" disabled>Selecione</option>
                {(opcoesDinamicas[campo.name] || []).map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
                {campo.permitirNovo && <option value="outros">+ Nova opção</option>}
              </select>

              {campo.name === 'categoria' && campo.permitirNovo && (
                <CampoNovaCategoria
                  campoRef={campoRef}
                  inputRef={inputRef}
                  adicionarCategoria={adicionarCategoria}
                />
              )}
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
              className="bg-white text-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
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
              className="bg-white text-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          )}
        </div>
      ))}

      <div className="flex justify-center">
        <button
          type="submit"
          aria-label={`Confirmar ${modo === 'editar' ? 'edição' : 'criação'} de ${tipo}`}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-full transition-transform hover:scale-105"
        >
          {modo === 'editar' ? 'Salvar alterações' : `Adicionar ${tipo}`}
        </button>
      </div>
    </form>
  );
}