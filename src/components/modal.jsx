import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ActionButton from "./action-button";
import LoginForm from "./form";

export default function Modal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ActionButton onClick={ handleOpen } />
            <Dialog
                maxWidth='lg'
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To enter to admin mode of this web app, please enter your email address and password.
                    </DialogContentText>
                    <LoginForm />
                </DialogContent>
            </Dialog>
        </div>
    );
}
