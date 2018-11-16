import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" color="secondary" className={classes.button}>
        H17
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        H22
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        H27
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        H28
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        H29
      </Button>
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);
