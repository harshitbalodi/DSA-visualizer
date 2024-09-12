import BubbleSort from './Algorithms/BubbleSort';

export default function Visualizer() {
  const data = [5, 3, 8, 4, 2];

  return (
    <div>
      <BubbleSort data={data} />
    </div>
  );
}
