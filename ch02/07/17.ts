const list = [1, 2]; // Type is number[]
const tuple: [number, number] = list;
// ~~~~~ Type 'number[]' is missing the following
//       properties from type '[number, number]': 0, 1
const tuple1: [number, number] = [1, 2];
const list1: number[] = tuple1;

export default {};
