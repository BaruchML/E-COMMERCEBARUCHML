// src/utils/formatCurrency.ts (si usas TypeScript)
// src/utils/formatCurrency.js (si usas JavaScript)

export const formatCurrency = (amount: number): string => {
  // 'es-MX' para español de México (o simplemente 'es' para español general)
  // 'MXN' para Pesos Mexicanos (código ISO 4217)
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2, // Asegura que siempre haya al menos 2 decimales
    maximumFractionDigits: 2, // Asegura que no haya más de 2 decimales
  }).format(amount);
};