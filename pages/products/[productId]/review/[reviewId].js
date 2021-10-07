import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div>
      product id is {productId} and reviewId is {reviewId}
    </div>
  );
}

export default Review;
