import React from 'react';
import axios from 'axios';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/posts`)
            .then(response => {
                const data = response.data;
                this.setState({ posts: data.data })
                console.log(this.state);
            });
    }

    render() {
        const Posts = this.state.posts.map((post) => {
            return (
                <>
                    <h5 className="text-left">
                        {post.user.username}
                    </h5>
                    <h6 className="text-left text-secondary">
                        {post.location}
                    </h6>
                    <img src={post.image_blob}></img>
                    <p className="text-left">
                        {post.caption}
                    </p>
                    <p>//</p>
                    {/* <button className="align-left" type="submit" className="btn btn-danger">Dislike</button> */}
                </>
            )
        })
        return (
            <>
                {this.state.posts.length > 0 ? Posts : "Loading"}
            </>
        );
    }
}

export default Feed;
