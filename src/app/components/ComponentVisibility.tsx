import React, { ReactNode } from "react";
interface IProps {
  appear: boolean;
  children: ReactNode;
}
const ComponentVisibility = (props: IProps) => {
  const { appear, children } = props;
  return <React.Fragment>{appear ? children : null}</React.Fragment>;
};

export default ComponentVisibility;
