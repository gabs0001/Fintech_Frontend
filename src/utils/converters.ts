import { Gasto, GastoFormData } from "@/types/gastos";

export function gastoToFormData(gasto: Gasto): GastoFormData {
  return {
    categoria: gasto.categoria,
    descricao: gasto.descricao,
    valor: Number(gasto.valor.replace(/[^\d,.-]/g, '').replace(',', '.')),
    data: gasto.data,
  };
}