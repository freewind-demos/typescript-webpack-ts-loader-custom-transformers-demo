import React, {FC} from 'react';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  const num = 1;
  return <div>
    <h1>Hello, transformed value: {num}</h1>
  </div>;
}
