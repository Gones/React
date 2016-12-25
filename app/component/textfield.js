import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const PubSub = require('pubsub-js');

class TextFieldControl extends React.Component {
  constructor(props) {
    super(props);
	
	this.state = {open: false};
	this.token = null;
	
	this.handleClose = this.handleClose.bind(this);
  }
  
  componentDidMount() {
	var subscriber = function(msg, data) {
		  this.setState({open: !this.state.open});
	  }.bind(this);
	  
	  this.token = PubSub.subscribe("MyTask", subscriber);
  }
  
  componentWillUnmount() {
	PubSub.unsubscribe(this.token);
  }

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
	const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
	
    return (
      <div>
        <Dialog
          title="Add new task"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
		<TextField
		  hintText="Title"
		  floatingLabelText="Title"
		  fullWidth={true}
		/><br />
		<TextField
		  hintText="Description"
		  floatingLabelText="Description"
		  fullWidth={true}
		  multiLine={true}
		  rowsMax={6}
		/>
        </Dialog>
      </div>
    );
  }
}

export default TextFieldControl;