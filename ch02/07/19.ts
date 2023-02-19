type T = Exclude<string | Date, string | number>; // Type is Date
type NonZeroNums = Exclude<number, 0>; // Type is still just number
// type이 exclude되는 것이고, 요소는(0)은 해당되지 않는다.

const a: NonZeroNums = 0; //?

// 타입 명명 관례
// E = Element
// K = Key
// N = Number
// T = Type
// V = Value

export default {};
