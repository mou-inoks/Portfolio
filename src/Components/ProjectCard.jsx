import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCards = () => {
  return (
    <div className="ag-format-container">
      <div className="ag-courses_box">
        <div className="ag-courses_item">
          <a
            href="https://github.com/mou-inoks/ComputerStock"
            className="ag-courses-item_link"
          >
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
              Computer Stock Application to manage computers
            </div>

            <div className="ag-courses-item_date-box">
              Start:
              <span className="ag-courses-item_date">04.01.2023</span>
            </div>
          </a>
        </div>

        <div className="ag-courses_item">
          <a
            href="https://github.com/mou-inoks/MyTheme"
            className="ag-courses-item_link"
          >
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">Personal VS Code Theme</div>

            <div className="ag-courses-item_date-box">
              Start:
              <span className="ag-courses-item_date">20.01.2023</span>
            </div>
          </a>
        </div>

        <div className="ag-courses_item">
          <a
            href="https://github.com/mou-inoks/SchoolProject"
            className="ag-courses-item_link"
          >
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
              UX-UI School project Website
            </div>

            <div className="ag-courses-item_date-box">
              Start:
              <span className="ag-courses-item_date">28.09.2022</span>
            </div>
          </a>
        </div>

        <div className="ag-courses_item">
          <a
            href="https://github.com/mou-inoks/easy-meal"
            className="ag-courses-item_link"
          >
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
              UX-UI Easy meal Application
            </div>

            <div className="ag-courses-item_date-box">
              Start:
              <span className="ag-courses-item_date">20.01.2023</span>
            </div>
          </a>
        </div>

        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
              UI-UX ITools modern website
            </div>

            <div className="ag-courses-item_date-box">
              Start:
              <span className="ag-courses-item_date">10.02.2023</span>
            </div>
          </a>
        </div>

        <div className="ag-courses_item">
          <a
            href="https://github.com/mou-inoks/Kohlanta"
            className="ag-courses-item_link"
          >
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">Kohlanta game</div>
          </a>
        </div>

        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">Python tools</div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCards;
