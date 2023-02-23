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
type PersonSpan = Person & Lifespan; // && 각각 1개씩이 포함되어 있어야..

const a: PersonSpan = {
  name: "alice",
  birth: new Date(),
};

export default {};
