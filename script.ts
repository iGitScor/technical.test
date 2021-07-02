import { Frequency } from './lib/frequency';

const freq = new Frequency();
const result = freq.list('baz bar foo foo zblah zblah zblah baz toto bar', 3);

console.log(result);
