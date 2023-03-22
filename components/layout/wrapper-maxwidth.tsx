import React from 'react';

type Props = {
  children: React.ReactNode;
};

const WrapperMaxWidth = ({ children }: Props) => {
  return <div className=''>{children}</div>;
};

export { WrapperMaxWidth };
