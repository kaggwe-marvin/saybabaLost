"use client";
import React, { ReactNode, useState } from "react";

interface Props {
  tabIds: string[];
  renderTitle: (id: string) => ReactNode;
  renderContent: (id: string) => ReactNode;
}

export default function Tabs({ tabIds, renderTitle, renderContent }: Props) {
  const [selectedId, setSelectedId] = useState(tabIds[0]);

  return (
    <div>
      {tabIds.map((id) => (
        <button
          key={id}
          onClick={() => {
            setSelectedId(id);
          }}
          style={{
            border: "none",
            background: id === selectedId ? "dodgerblue" : "transparent",
          }}>
          {renderTitle(id)}
        </button>
      ))}
      <hr />
      <div>{renderContent(selectedId)}</div>
    </div>
  );
}
