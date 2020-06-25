import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const PostId = (props) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`);
            let json = await res.json();
            setPost(json);
        }
        fetchData();
    }, [props]);

    let dic = {width: '18rem'}
    return (
        <div className="card" style = {dic} key = {post.id}>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>))
            </div>
        </div> 
    );

}

export default PostId;