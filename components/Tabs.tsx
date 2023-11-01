"use client";
import { TabProps } from "@/typings";
import React, { useState } from "react";

export default function Tabs({ tabIds, renderTitle, renderContent }: TabProps) {
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
