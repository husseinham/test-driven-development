import { isValid } from './isbn13'; // Funktion importieren

describe('isValid', () => {
  test.each([
    ['9780306406157', true],   // Gültige ISBN
    ['9783161484100', true],   // Gültige ISBN
    ['9791234567896', true],   // Gültige ISBN
    ['9780306406158', false],  // Ungültige ISBN (falsche Prüfziffer)
    ['9783161484101', false],  // Ungültige ISBN
    ['9791234567890', false],  // Ungültige ISBN
    ['1234567890123', false],  // Falsches Präfix
    ['97812345678', false],    // Zu kurz
    ['97812345678901', false], // Zu lang
    ['97812345678AB', false],  // Enthält Buchstaben
  ])('should validate ISBN %s as %s', (isbn, expected) => {
    expect(isValid(isbn)).toBe(expected);
  });
});
