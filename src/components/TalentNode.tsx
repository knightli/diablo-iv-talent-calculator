import React from "react";

interface TalentNodeProps {
  node: {
    id: number;
    name: string;
    type: string;
    position: { x: number; y: number };
    connections?: Array<number>;
  };
}

const TalentNode: React.FC<TalentNodeProps> = ({ node }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: node.position.x,
        top: node.position.y,
      }}
    >
      {node.name}
    </div>
  );
};

export default TalentNode;
