import React from 'react';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';

const EditDocument = (
  {
    onChange,
    onSubmit,
    invalid,
    options,
    title,
    content,
    access
  }
) => {
  return (
    <div className="email-content">
    <form className="col s12" onSubmit={onSubmit} method="post">
    <TextInput
      className="input-field col m6 s12"
      type="text"
      name="title"
      id="title"
      onChange={onChange}
      error=""
      label="Title"
      labelclass="active"
      value={title}
      required
    />
    <TextArea
        id="content"
        type="text"
        name="content"
        className="materialize-textarea"
        onChange={onChange}
        labelclass="active"
        value={content}
        errors="{errors}"
        label="Content"
      />
      <div className="input-field col s12">
        {options && options.map((option, index) => {
          return (
            <p key={index}><input
              name="access"
              type="radio"
              value={option.value}
              onChange={onChange}
              id={option.text}
              checked={option.value === access}
               />
              <label
              htmlFor={option.text}>
              {option.text}
              </label></p>);
        })}
      </div>
      <br />
      <br />
      <br />
       <button
          type="submit"
          name="btn_login"
          className="col s12 btn btn-large waves-effect light-blue darken-3"
          disabled={invalid}
        >Submit</button>
        </form>
      </div>
  );
};
EditDocument.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  invalid: React.PropTypes.bool.isRequired,
  options: React.PropTypes.array.isRequired,
};
export default EditDocument;