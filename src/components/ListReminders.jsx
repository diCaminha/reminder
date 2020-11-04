import React from "react";
import { Component } from "react";
import CardReminder from "./cardReminder/CardReminder";

export default class ListReminders extends Component {
  render() {
    return (
      <ul>
        {Array.of("Finance", "Study", "Fun").map((category) => {
          return (
            <li>
              <h1>{category}</h1>
              <CardReminder />
            </li>
          );
        })}
      </ul>
    );
  }
}
