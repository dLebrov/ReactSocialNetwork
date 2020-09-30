import TextField from "@material-ui/core/TextField";
import s from "../Dialogs/Dialogs.module.css";
import React from "react";

export default function TextFieldSizes({input}) {
    return(
        <div>
            <TextField className={s.textarea}
                       {...input}
                       autoComplete="off"
                       id="outlined-size-small"
                       label="Введите сообщение"
                       defaultValue=" "
                       variant="outlined"
                       size="small"/>
        </div>)}