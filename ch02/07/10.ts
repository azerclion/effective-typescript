interface Identified {
  id: string;
}
interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;
type K = keyof (Person | Lifespan); // Type is never

type KK = Person | Lifespan;
const aa: KK = {
  name: "name",
};
export default {};
