import * as React from "react";

interface Props {
  pageTitle: string;
  children: React.ReactNode;
}

export const Layout = ({ pageTitle, children }: Props) => {
  return (
    <div>
      <h1>{pageTitle}</h1>
      {children}
    </div>
  );
};
