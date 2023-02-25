type TState = {
  name: string;
  capital: string;
};
interface IState {
  name: string;
  capital: string;
}
interface IStateWithPop extends TState {
  population: number;
}
type TStateWithPop = IState & { population: number };
type TStateWithPop2 = IState & TState;

export default {};
