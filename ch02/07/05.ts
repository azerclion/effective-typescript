type AB = "A" | "B";
type AB12 = "A" | "B" | 12;
// OK, {"A", "B"} is a subset of {"A", "B"}:
const ab: AB = Math.random() < 0.5 ? "A" : "B";
const ab12: AB12 = ab; // OK, {"A", "B"} is a subset of {"A", "B", 12}

declare let twelve: AB12;

const back: AB = twelve; // 타입을 할당할 수 없다는 말인듯.....
// ~~~~ Type 'AB12' is not assignable to type 'AB'
//        Type '12' is not assignable to type 'AB'

export default {};
