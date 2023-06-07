import Skeleton from "react-loading-skeleton";

export default function Loading() {
  console.log("loading component");
  // You can add any UI inside Loading, including a Skeleton.
  return <div className="h-full w-full">LOADING...</div>;
  //   return <Skeleton />;
}
