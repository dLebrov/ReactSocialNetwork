import React from 'react';
import s from './MyPosts.module.css';
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FromsControls/FormsControls";

const MyPosts = React.memo( props => {
    let newPostElement = React.createRef();

    let postsElement = props.post.map(p => (
        <Post message={p.message} like={p.like}/>
    ));

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={s.MyPost}>
            <div>
                Мои Записи
            </div>
            <MyPostReduxForm onSubmit={onAddPost}/>
            {postsElement}
        </div>
    )
})

const maxLength = maxLengthCreator(30);

const MyPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength]}
                       placeholder={"post message"}
                       component={Textarea} name={"newPostText"}
                       className={s.textarea} />
                <div>
                    <button className={s.click} href="#">Добавить</button>
                </div>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm ({form: "ProfileForm"}) (MyPostForm)

export default MyPosts;