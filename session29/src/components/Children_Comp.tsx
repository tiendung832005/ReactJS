import React from 'react';

interface ChildrenCompProps {
  name: string;
}
const Children_Comp: React.FC<ChildrenCompProps> = ({ name }) => {
  return (
    <div>
      <p>Họ và tên component con: {name}</p>
    </div>
  );
};

export default Children_Comp;
