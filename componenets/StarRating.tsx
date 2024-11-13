const RATINGS = [1, 2, 3, 4, 5];

export default function StarRating({ value = 1 }) {
  return <span>{RATINGS.map((rating) => (value >= rating ? "★" : "✩"))}</span>;
}
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
6;
