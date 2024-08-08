import React from "react";
import mywork_data from "./mywork_data";

function MyWork() {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src="" alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div>
              <h3>{work.w_no}</h3>
              <h2>{work.w_name}</h2>
              <p>{work.w_img}</p>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default MyWork;
