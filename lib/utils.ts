export function formatDate(tanggalString: string): string {
  const tanggal = new Date(tanggalString);
  const tanggalDiformat = tanggal.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return tanggalDiformat.charAt(0).toUpperCase() + tanggalDiformat.slice(1);
}

export const formattedPrice = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
});