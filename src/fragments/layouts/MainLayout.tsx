import React from "react";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      Idk, header here
      <div>{children}</div>
      Idk, Footer here
    </div>
  );
};

export default MainLayout;
