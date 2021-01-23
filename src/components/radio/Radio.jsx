import React, { Component } from "react";
import DbRadio from "./DbRadio.json";
import "./Radio.css";

export default class Radio extends Component {
  render() {
    return (
      <section className="radio">
        <h1>Ujian Ke 2 Abdul Jarkoni</h1>
        {DbRadio.map((postRadio, index) => {
          return (
            <div className="radio_page">
              <h2>1.{postRadio.soal}</h2>
              <div>
                <input type="radio" name="" id="" />
                {postRadio.a}
                <input type="radio" name="" id="" />
                {postRadio.b}
                <input type="radio" name="" id="" />
                {postRadio.c}
                <input type="radio" name="" id="" />
                {postRadio.d}
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
