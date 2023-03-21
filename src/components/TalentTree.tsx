import React from "react";
import TalentNode from "./TalentNode";

interface TalentTreeProps {
  data: {
    nodes: Array<{
      id: number;
      name: string;
      type: string;
      position: { x: number; y: number };
      connections?: Array<number>;
    }>;
  };
}

const TalentTree: React.FC<TalentTreeProps> = ({ data }) => {
  return (
    <div>
      {data.nodes.map((node) => (
        <TalentNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default TalentTree;
