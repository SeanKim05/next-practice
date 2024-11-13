type Sex = "male" | "female";
type Fit = "small" | "good" | "big";

export type SizeReview = {
  id: string;
  createdAt: string;
  sex: Sex;
  height: number;
  size: string;
  fit: Fit;
};
