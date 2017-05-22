/* global Materialize */
/* global $ */
import React from 'react';
import TextInput from '../../common/TextInput';

/** @class CreateDocumentModal
 * @classdesc component for create document modal
 */
class AddRoleModal extends React.Component {
  /* eslint-disable Unexpected alert */

  /**
   * constructor - contains the constructor
   * @param  {type} props the properties of the class component
   * @return {void} no return or void
   */
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.addRole(this.state)
    .then(() => {
      Materialize.toast('Document Created Successfully', 1000, 'green',
        () => {
          $('#modal2').closeModal({ dismissible: true });
          $('.lean-overlay').css({ display: 'none' });
          $('.lean-overlay').remove();
        });
    })
    .catch(() => {
      Materialize.toast('An Error Occured Please try again', 1000, 'red',
        () => {
          $('#modal2').closeModal({ dismissible: true });
          $('.lean-overlay').css({ display: 'none' });
          $('.lean-overlay').remove();
        });
    });
  }
  /**
   * render - renders the class component
   * @return {object} returns an object
   */
  render() {
    const { nextRoleId } = this.props;
    return (
    <div>
    <div id="modal1" className="modal modalStyle">
      <main>
        <center>
          <div className="section" />
          <form className="col s12" onSubmit={this.onSubmit} method="post">
             <div className="row">
               <span className="left">RoleID: {nextRoleId}</span>
                <TextInput
                id="title"
                type="text"
                name="title"
                className="input-field col m12 s12"
                onChange={this.onChange}
                value={this.state.title}
                label="Title"
                />
                </div>
          <div className="row">
            <button
              type="submit"
              name="btn_login"
              className="col s12 btn btn-large waves-effect light-blue darken-3"
              disabled={this.state.invalid}
            >Submit</button>
          </div>
            </form>
            </center>
            </main>
          </div>
          </div>);
  }
}

AddRoleModal.propTypes = {
  nextRoleId: React.PropTypes.array.isRequired,
  addRole: React.PropTypes.func.isRequired
};
AddRoleModal.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default AddRoleModal;