import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img className={s.img} src="https://klike.net/uploads/posts/2018-05/1525256972_15.jpg" alt=""/>
                { props.message }
                <div>
                    <button className={s.button} href="#" /*onClick={likeCount}*/>
                        ❤
                        {props.like}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Post;