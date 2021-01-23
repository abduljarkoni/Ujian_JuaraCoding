import React, { Component } from "react";
import DbEssay from "./DbEssay.json";
import "./Essay.css";

export default class Essay extends Component {
  render() {
    return (
      <div className="essay">
        {DbEssay.map((postEssay, index) => {
          return (
            <div className="essay_page">
              <h2>3.{postEssay.soal}</h2>
              <div className="form_input">
                <input type="textarea" name="" id="essay_input" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
