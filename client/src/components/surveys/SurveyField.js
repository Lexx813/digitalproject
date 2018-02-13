// SurveyField contains logic to render a single
// label and text input
import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="survey__form">
      <label className="form__label">{label}</label>
      <input className="form__input" {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
