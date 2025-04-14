export function isValid(isbn: string): boolean {
  // Länge prüfen
  if (isbn.length !== 13) {
    return false;
  }

  // Nur Ziffern prüfen
  if (!/^\d{13}$/.test(isbn)) {
    return false;
  }

  // Präfix prüfen
  if (!isbn.startsWith('978') && !isbn.startsWith('979')) {
    return false;
  }

  // Prüfziffer berechnen
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(isbn[i], 10);
    sum += (i % 2 === 0) ? digit : digit * 3;
  }
  const checksum = (10 - (sum % 10)) % 10;

  return checksum === parseInt(isbn[12], 10);
}
