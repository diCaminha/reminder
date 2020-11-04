import React, { Component } from "react";

export default class FormReminder extends Component {
  render() {
    return (
      <form>
        <input type="textarea" placeholder="Title" />
        <textarea placeholder="Type some to reminder..." />
        <button>Send</button>
      </form>
    );
  }
}
