import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
};

class StepSlider extends React.Component {
  state = {
    value: 3,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider value={value} min={0} max={6} step={1} onChange={this.handleChange} />
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

const StepSlider1 = withStyles(styles)(StepSlider);

const Box = () => {
  return(
    <div className="box box-default">
      <div className="box-header">With Steps</div>
      <div className="box-body d-flex justify-content-center">
        <StepSlider1 />
      </div>
    </div>
  )
}

export default Box;