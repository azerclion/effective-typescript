interface Vector3 {
  x: number;
  y: number;
  z: number;
}
function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis];
}
type Fifi = Pick<Vector3, "x" | "y" | "z">;
const mmkk: Fifi = { x: 1, y: 2, z: 3 };

const mixed = ["x", 1];

export default {};
