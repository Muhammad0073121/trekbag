import React from "react";

export default function EmptyView() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        justifySelf: "center",
        alignItems: "center",
      }}
    >
      <h3>Empty Packing List</h3>
      <p>Start by adding some items you absolutely don't want to forget</p>
    </section>
  );
}
