interface Tuple {
  0: number;
  1: number;
  length: 2;
}
const t: Tuple = [10, 20]; // OK

t.concat(t);

interface Tuple1 extends Array<unknown> {
  0: number;
  1: number;
  length: 2;
}
const tt: Tuple1 = [100, 200];
tt.concat(tt);

export default {};
