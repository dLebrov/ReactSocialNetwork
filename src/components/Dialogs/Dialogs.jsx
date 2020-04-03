import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TextFieldSizes from "../MaterialUi/DialogsUI";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => (<DialogItem name={d.name} key={d.id} id={d.id}/>));
    let messagesElements = state.messages.map(m => (<Message message={m.message} key={m.id} id={m.id}/>));
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 4,
        },
        paper: {
            padding: theme.spacing(5),
            background: "#f5f5f5"
        },
    }));
    const classes = useStyles();
    return (
        <Grid container>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <Paper className={classes.paper}>
                        {dialogsElements}
                    </Paper>
                </div>
                <div className={s.messages}>
                    <Paper className={classes.paper}>
                        {messagesElements}
                    </Paper>
                </div>
            </div>
            <div className={s.addMessage}>
            </div>
                <DialogsReduxForm onSubmit={addNewMessage}/>
        </Grid>
    )
}


let maxLength = maxLengthCreator(50);

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={s.formMessage}>
            <div className={s.input}>
                <Field component={TextFieldSizes}
                       onSubmit={props.handleSubmit}
                       name={"newMessageBody"}
                       validate={[required, maxLength]}/>
            </div>
            <div className={s.button}>
                <Button variant="contained"
                        color="primary"
                        endIcon={<Icon>send</Icon>}
                        onClick={props.handleSubmit}
                >Отправить</Button>
            </div>
        </div>

    </form>
}

const DialogsReduxForm = reduxForm({form: "dialogForm"})(DialogsForm)

export default Dialogs;