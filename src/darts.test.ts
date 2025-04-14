import { DartsGame } from './darts'; // Klasse importieren

describe('DartsGame', () => {
  it('should start with 501 points', () => {
    const game = new DartsGame();
    expect(game.getScore()).toBe(501);
  });

  it('should subtract simple single points correctly', () => {
    const game = new DartsGame();
    game.throw('single', 20);
    expect(game.getScore()).toBe(481);
  });

  it('should subtract double and triple points correctly', () => {
    const game = new DartsGame();
    game.throw('double', 10);  // 20 Punkte
    expect(game.getScore()).toBe(481);
    game.throw('triple', 15);  // 45 Punkte
    expect(game.getScore()).toBe(436);
  });

  it('should bust if score goes below zero', () => {
    const game = new DartsGame();
    game.score = 10; // künstlich setzen
    game.throw('triple', 4); // 12 Punkte -> bust
    expect(game.getScore()).toBe(10); // zurückgesetzt
  });

  it('should bust if score is 1', () => {
    const game = new DartsGame();
    game.score = 1;
    game.throw('single', 1); // bust
    expect(game.getScore()).toBe(1); // zurückgesetzt
  });

  it('should only finish with double', () => {
    const game = new DartsGame();
    game.score = 40;
    game.throw('single', 40); // nicht double -> bust
    expect(game.getScore()).toBe(40);

    game.throw('double', 20); // double 20 -> exakt 0
    expect(game.getScore()).toBe(0);
    expect(game.isFinished()).toBe(true);
  });
});
