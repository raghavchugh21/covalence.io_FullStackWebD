import React, { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const App = () => {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await res.json();
        setPosts(json);
    }

    useEffect(() => {
        fetchData();
    }, []);

    let dic = {width: '18rem'}
    return (
        <Fragment>
        {posts.map( post =>(
        <div className="card" style = {dic} key = {post.id}>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>))
            </div>
        </div>) )}
        </Fragment>
    );

}

export default App;