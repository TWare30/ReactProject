import React from "react";

function Bar(props) {
  const { name, stat } = props;
  const ParentDiv = {
    backgroundColor: "whitesmoke",
    width: 252,
    borderRadius: 50,
    margin: 0,
    padding: 0,
  };

  const ChildDiv = {
    height: "100%",
    width: props.stat,
    backgroundColor: props.color,
    borderRadius: 40,
    textAlign: "right",
  };

  const ProgressText = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div className="flex flex-row">
      <div>{name}</div>
      <div style={ParentDiv}>
        <div style={ChildDiv}>
          <span style={ProgressText}>{stat}</span>
        </div>
      </div>
    </div>
  );
}

export default Bar;
