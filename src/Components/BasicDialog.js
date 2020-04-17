import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function BasicDialog(props) {


    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleCloseEvent}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{props.modaltitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.modalContent}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {props.cancelText &&
                    <Button onClick={props.modalCancelEvent} color="primary">
                        {props.cancelText}
                    </Button>}
                    <Button onClick={props.modalOkEvent} color="primary" autoFocus>
                        {props.okText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
