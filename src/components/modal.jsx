import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class FormDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            email: ''
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    };

    notify = () => toast.info('You\'ve been successfully authorized!!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    render() {
        return (
            <div>
                <a href="#" className="button button-black" onClick={this.handleClickOpen}>Start</a>
                <Dialog
                    maxWidth="lg"
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To enter to admin mode of this web app, please enter your email address and password.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            required
                            fullWidth
                            validators={['required', 'isEmail']}
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            required
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.notify} variant="contained" color="primary">Ok</Button>
                        <Button onClick={this.handleClose} variant="contained" color="secondary">Cancel</Button>
                    </DialogActions>
                    <ToastContainer />
                </Dialog>


            </div>
        );
    }
}

export default FormDialog;
