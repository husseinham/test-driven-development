export class DartsGame {
  score: number;
  private previousScore: number;

  constructor() {
    this.score = 501;
    this.previousScore = 501;
  }

  getScore(): number {
    return this.score;
  }

  isFinished(): boolean {
    return this.score === 0;
  }

  throw(ring: 'single' | 'double' | 'triple', sector: number): void {
    this.previousScore = this.score;

    let points = 0;
    if (ring === 'single') {
      points = sector;
    } else if (ring === 'double') {
      points = sector * 2;
    } else if (ring === 'triple') {
      points = sector * 3;
    }

    this.score -= points;

    // Bust, wenn < 0 oder 1 Punkt übrig
    if (this.score < 0 || this.score === 1) {
      this.score = this.previousScore;
      return;
    }

    // Check, ob das Spiel zu Ende ist
    if (this.score === 0) {
      // Letzter Wurf muss ein Double sein
      if (ring !== 'double') {
        this.score = this.previousScore;
      }
    }
  }
}
