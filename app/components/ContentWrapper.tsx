import { HTMLAttributes } from "react";

const ContentWrapper = ({
  element,
  ...rest
}: {
  element: JSX.Element | React.ReactNode | null;
} & HTMLAttributes<HTMLElement>) => {
  return <>{element}</>;
};

export default ContentWrapper;
