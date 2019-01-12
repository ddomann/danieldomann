import React, { Component } from 'react';
const firebase = require('firebase');
const uuid = require('uuid');
//const moment = require('moment');

const config = {
  apiKey: 'AIzaSyBAmdpWSXQSk-V9M6B9avsf0jXA1n0ibdc',
  authDomain: 'danieldomann-62011.firebaseapp.com',
  databaseURL: 'https://danieldomann-62011.firebaseio.com/',
  projectId: 'danieldomann-62011',
  storageBucket: 'danieldomann-62011.appspot.com',
  messagingSenderId: '403963476273',
};


class Contactform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: uuid.v1(),
      name: '',
      email: '',
      message: '',
      subscribe: false
    };
    this.submitData = this.submitData.bind(this);
    this.inputData = this.inputData.bind(this);
  }

  componentDidMount() {
    firebase.initializeApp(config);
    firebase
    .database()
    .ref(`Formdata/${this.state.uid}`);
  }

  submitData(e) {
    const { name, email, message, subscribe} = this.state;
    const dateReceived = firebase.database.ServerValue.TIMESTAMP;
    e.preventDefault();
    firebase
    .database()
    .ref(`Formdata/${this.state.uid}`)
    .set({
      name: name,
      email: email,
      message: message,
      subscribe: subscribe,
      dateReceived: dateReceived
    }).then(() => {
      alert("Party on dude!");
    })
    .catch(error => console.log(error),alert("errr minor malfunction.. bummer dude :("));
    this.setState({
      name: '',
      email: '',
      message: '',
      subscribe: false,
      uid: uuid.v1()
    });
  }

  inputData(e) {
    this.setState({ [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  }
  render() {
    return (
      <div>
      <form id="contact-form" onSubmit={this.submitData}>
      <div className="form-group">
      <input className="form-control" required="" type="text" placeholder="Name" value={this.state.name} onChange={this.inputData} name="name" />
      </div>
      <div className="form-group">
      <input className="form-control" required="" type="email" placeholder="Email" value={this.state.email} onChange={this.inputData} name="email" />
      </div>
      <div className="form-group">
      <textarea className="form-control" required="" type="textarea" placeholder="Message" value={this.state.message} onChange={this.inputData} name="message"></textarea>
      </div>
      <div className="form-group">
      <label className="d-inline">
      <input className="form-check d-inline mr-2" type="checkbox" checked={this.state.subscribe} onChange={this.inputData} name="subscribe" />
    SUBSCRIBE TO THE MAILING LIST
      </label>
      </div>
      <button className="m_btn" type="submit"> <span>Submit</span>
  <div className="transition"></div></button>
      </form>
      </div>
    );
  }
}
export default Contactform;
