import React from "react";
import Meter from "./Meter";

function Pagination({ totalPage, currentPage, startAnimation }) {
  const pageArr = [];

  for (var i = 1; i <= totalPage; i++) {
    pageArr.push(i);
  }

  return (
    <div
      className="pagination-outter"
      style={
        startAnimation
          ? { animation: "1.5s ease-out 0.5s onLoadEnterRight forwards" }
          : undefined
      }
    >
      <div className="pagination-inner">
        <div className="page-outter">
          {pageArr.map((page, index) => (
            <div
              key={index}
              className={"pages " + (page === currentPage ? "active" : "")}
            >
              <div>{page}</div>
            </div>
          ))}
        </div>
        <div className="total-outter">
          <div>{totalPage}</div>
        </div>
        <Meter total={totalPage} current={currentPage} />
      </div>
    </div>
  );
}

export default Pagination;
