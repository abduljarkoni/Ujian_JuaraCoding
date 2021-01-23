import React, { Component } from "react";
import DbCekbok from "./DbCekbok.json";
import "./Cekbok.css";

export default class Cekbok extends Component {
  render() {
    return (
      <div className="cekbok">
        {DbCekbok.map((postCekbok, index) => {
          return (
            <div className="cekbok_page">
              <h2>2.{postCekbok.soal}</h2>
              <div>
                <input type="checkbox" name="" id="" />
                {postCekbok.option1}
                <input type="checkbox" name="" id="" />
                {postCekbok.option2}
                <input type="checkbox" name="" id="" />
                {postCekbok.option3}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
