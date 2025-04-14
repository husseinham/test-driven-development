import { play } from './rock-paper-scissors'; // Funktion importieren

describe('play', () => {
  test.each([
    ['rock', 'scissors', 1],
    ['scissors', 'paper', 1],
    ['paper', 'rock', 1],
    ['scissors', 'rock', 2],
    ['paper', 'scissors', 2],
    ['rock', 'paper', 2],
    ['rock', 'rock', 0],
    ['paper', 'paper', 0],
    ['scissors', 'scissors', 0],
    [' Rock ', ' Scissors ', 1],  
    ['PAPER', 'rock', 1],         
  ])('player1: %s vs player2: %s => winner: %i', (player1, player2, expected) => {
    expect(play(player1, player2)).toBe(expected);
  });

  it('should throw an error for invalid moves', () => {
    expect(() => play('banana', 'rock')).toThrow('Invalid move');
    expect(() => play('rock', 'lizard')).toThrow('Invalid move');
  });
});
