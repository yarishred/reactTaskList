import React from "react";

const TotalTask = ({mytasks}) => {
  return (
    <div className="myTasks">
      <h1>Total Tasks: {mytasks}</h1>
    </div>
  );
};

export default TotalTask;
