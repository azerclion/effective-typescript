interface Vector3 {
  x: number;
  y: number;
  z: number;
}

type Fifi = Pick<Vector3, "x" | "y" | "z">;

function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis];
}

export default {};
