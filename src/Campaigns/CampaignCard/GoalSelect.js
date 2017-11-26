import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class GoalSelect extends React.Component {
  state = {
    open: false,
    age: ""
  };

  handleChange = name => event => {
    this.props.onSubmit(name, event.target.value )
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Select Goal</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange("goal")}
              input={<Input id="age-simple" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'awareness'}>AWARENESS</MenuItem>
              <MenuItem value={'consideration'}>CONSIDERATION</MenuItem>
              <MenuItem value={'conversions'}>CONVERSIONS</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
    );
  }
}

GoalSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GoalSelect);
