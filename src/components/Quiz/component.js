import React from 'react';
import {withStyles} from '@material-ui/styles';
import {
  TextField,
  Button
} from '@material-ui/core';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },

  textField: {}
};

const Quiz = ({render}) => (
    <div className="container">
      {render ? <Question/> : <Intro/> }
    </div>
  )
;

const Intro = () => (
  <div>Intro</div>
);

const Question = () => (
  <div>Question</div>
);

export default withStyles(styles)(Quiz);