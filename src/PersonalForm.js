import React, { Component } from "react";
import Title from "./Title";
import "./PersonalForm.css";

export class PersonalForm extends Component {
  handleChangeForm = event => {
    this.props.onChangeForm(
      event.target.name,
      event.target.value
    );
  };
  render() {
    return (
      <div>
        <Title>Персональная информация</Title>
        <div className="personal-form">
          <input
            name="firstName"
            placeholder="firstName"
            value={this.props.firstName}
            onChange={this.handleChangeForm}
          />

          <input
            name="lastName"
            placeholder="lastName"
            value={this.props.lastName}
            onChange={this.handleChangeForm}
          />
          <input
            name="email"
            placeholder="email"
            value={this.props.email}
            onChange={this.handleChangeForm}
          />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
