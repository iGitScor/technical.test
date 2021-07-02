import { Frequency } from './lib/frequency';

describe('Technical test', () => {
  it('should sort words by frequency', () => {
    const freq = new Frequency();
    expect(freq.compareFrequency(['one', 10], ['two', 20]))
      .toEqual(1);

    expect(freq.compareFrequency(['one', 10], ['one', 20]))
      .toEqual(1);

    expect(freq.compareFrequency(['two', 10], ['one', 20]))
      .toEqual(1);

    expect(freq.compareFrequency(['one', 10], ['one', 10]))
      .toEqual(0);

    expect(freq.compareFrequency(['two', 10], ['one', 10]))
      .toEqual(-1);

    expect(freq.compareFrequency(['one', 10], ['two', 10]))
      .toEqual(-1);
  });

  it('should return at least n elements', () => {
    const frequency = new Frequency();
    expect(frequency.list('a b c a b', 6).length).toEqual(3);
  });

  it('should return frequency sort by word count', () => {
    const frequency = new Frequency();
    expect(frequency.list('b a b a b', 2)).toEqual([['b', 3], ['a', 2]]);
  });

  it('should return frequency sort alphabetically when having the same count', () => {
    const frequency = new Frequency();
    expect(frequency.list('b a b a', 2)).toEqual([['a', 2], ['b', 2]]);
  });

  it('should return no frequency with empty string', () => {
    const frequency = new Frequency();
    expect(frequency.list('', 3)).toEqual([]);
  });

  it('should accept positive length only', () => {
    const frequency = new Frequency();
    expect(() => {
      frequency.list('aa', -1);
    }).toThrow();
  })
})
