import React from "react";

function Bar(props) {
  const { name, stat } = props;
  const ParentDiv = {
    backgroundColor: "LightGray",
    width: 256,
    borderRadius: 50,
    borderColor: "black",
    margin: 0,
    padding: 0,
  };

  const ChildDiv = {
    height: "100%",
    width: props.stat,
    backgroundColor: props.color,
    borderRadius: 40,
    textAlign: "right",
    "margin-right": 1,
  };

  const ProgressText = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div className="flex flex-row No-Margins">
      <div className="col-4 No-Margins">{name + ":"}</div>
      <div className="col-8 border-1" style={ParentDiv}>
        <div style={ChildDiv}>
          <span style={ProgressText}>{stat}</span>
        </div>
      </div>
    </div>
  );
}

export default Bar;
