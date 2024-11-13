type Sex = "male" | "female";
type Fit = "small" | "good" | "big";

type SizeReview = {
  id: string;
  createdAt: string;
  sex: Sex;
  height: number;
  size: string;
  fit: Fit;
};

export type SizeReviewListProps = {
  sizeReviews: SizeReview[];
};
