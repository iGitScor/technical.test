type FrequencyResult = [string, number];

export class Frequency {
  list(sentence: string, n: number): FrequencyResult[] {
    if (n <= 0) {
      throw new Error('Length must be positive');
    }
    return this.sentenceToWord(sentence)
      ?.filter((wordFrequency) => {
        return wordFrequency[0] !== '';
      })
      ?.sort(this.compareFrequency)
      ?.slice(0, n);
  }

  compareFrequency(candidateA: FrequencyResult, candidateB: FrequencyResult): number {
    const [wordA, countA] = candidateA;
    const [wordB, countB] = candidateB;
    if (countA < countB) { // Sort by frequency
      return 1;
    }
    if (countA > countB || wordA < wordB) { // Sort alphabetically
      return -1;
    }
    if ((countA === countB && wordA > wordB)) {
      return -1;
    }
    return 0;
  }

  sentenceToWord(sentence: string): FrequencyResult[] {
    const result = sentence.split(' ').reduce((total, value) => {
      total[value] = (total[value] || 0) + 1;
      return total;
    }, Object.create(null));

    return Object.entries(result);
  }
}
