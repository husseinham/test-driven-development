export function play(player1: string, player2: string): number {
  const normalize = (move: string) => move.trim().toLowerCase();

  const p1 = normalize(player1);
  const p2 = normalize(player2);

  const validMoves = ['rock', 'paper', 'scissors'];

  if (!validMoves.includes(p1) || !validMoves.includes(p2)) {
    throw new Error('Invalid move');
  }

  if (p1 === p2) return 0;

  if (
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'paper' && p2 === 'rock')
  ) {
    return 1;
  }

  return 2;
}
