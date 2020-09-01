import React, { Component, Fragment } from "react";

//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import CircularProgress from "@material-ui/core/CircularProgress";

//Icons
import CheckIcon from "@material-ui/icons/Check";

const styles = (theme) => ({
  button: {
    padding: "10px 20px",
  },
  modal: {
    /*backgroundColor: theme.palette.secondary.main,*/
    padding: 20,
  },
  textField: {
    margin: "10px auto 10px auto",
    color: theme.palette.secondary.dark,
  },
  paper: {
    backgroundColor: "#b4f0c9",
    display: "flex",
    alignItems: "center",
  },
  sent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    fontSize: 20,
  },
  check: {
    color: "#1ED760",
    marginRight: 5,
    fontSize: 40,
  },
  closeButton: {
    position: "absolute",
    left: "90%",
    top: "5%",
  },
  submitButton: {
    margin: "15px auto",
    position: "relative",
  },
  progressSpinner: {
    position: "absolute",
  },
});

class Signup extends Component {
  state = {
    open: false,
    name: "",
    email: "",
    number: "",
  };
  handleOpen = () => {
    this.setState({
      open: true,
    });
    /*this.props.clearErrors();*/
  };
  handleClose = () => {
    this.setState({ open: false, name: "", email: "", number: "" });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
    };
    /*this.props.requestTutor(request, tutor);*/
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Button
          onClick={this.handleOpen}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <Typography variant="h5">Sign up</Typography>
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
          PaperProps={{
            classes: {
              root: classes.modal /*posted ? classes.paper : null,*/,
            },
          }}
        >
          <Tooltip title="Close" placement="top">
            <IconButton
              onClick={this.handleClose}
              className={classes.closeButton}
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
          <DialogTitle align="center">
            <Typography variant="h4">Sign Up Info</Typography>
          </DialogTitle>
          <DialogContent align="center">
            {
              /*posted ? (
              <Fragment>
                <span className={classes.sent}>
                  <CheckIcon className={classes.check} /> Request sent
                  successfully!
                </span>
                <br />
                <Typography variant="body1">
                  *You will receive an email if {firstName} accepts your request
                </Typography>
                <br />
              </Fragment>
            ) : ()*/
              <Fragment>
                <form noValidate onSubmit={this.handleSubmit}>
                  <TextField
                    name="name"
                    type="text"
                    label="Name"
                    className={classes.textField}
                    /*helperText={errors.name}
                    error={errors.name ? true : false}*/
                    value={this.state.name}
                    onChange={this.handleChange}
                    variant="outlined"
                    align="left"
                    fullWidth
                    required
                  />
                  <TextField
                    name="email"
                    type="email"
                    label="Email"
                    className={classes.textField}
                    /*helperText={errors.email}
                    error={errors.email ? true : false}*/
                    value={this.state.email}
                    onChange={this.handleChange}
                    variant="outlined"
                    align="left"
                    fullWidth
                    required
                  />
                  <TextField
                    name="number"
                    type="tel"
                    label="Phone Number"
                    className={classes.textField}
                    /*helperText={errors.number}
                    error={errors.number ? true : false}*/
                    value={this.state.number}
                    onChange={this.handleChange}
                    variant="outlined"
                    align="left"
                    fullWidth
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    /*disabled={loading}*/
                    className={classes.submitButton}
                  >
                    <Typography variant="h6">Submit</Typography>
                    {/*loading && (
                      <CircularProgress className={classes.progressSpinner} />
                    )*/}
                  </Button>
                </form>
              </Fragment>
            }
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Signup);
