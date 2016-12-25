import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextFieldControl from './textfield'

const PubSub = require('pubsub-js');

const style = {
    margin: 0,
	left: 'auto',
    top: 'auto',
    right: 16,
    bottom: 32,
    position: 'fixed',
};

class ButtonControl extends React.Component {
  constructor(props) {
    super(props);
	
	this.handleClick = this.handleClick.bind(this);
  }
    
  handleClick = () => {  
	  PubSub.publish("MyTask", "Click");
  }

  render() {
    return (
      <div>
		<FloatingActionButton secondary={true} style={style} onClick={this.handleClick}>
		  <ContentAdd />
		</FloatingActionButton>
		<TextFieldControl />
	  </div>
    );
  }
}

export default ButtonControl;