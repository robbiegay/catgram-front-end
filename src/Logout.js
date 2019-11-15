import React from 'react';
import axios from 'axios';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     token: '',
        // };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.tokenSetter('');
        // event.preventDefault();
        // axios.post(`http://127.0.0.1:8000/api/login`, this.state)
        //     .then(response => {
        //         const data = response.data;
        //         // console.log(data);
        //         this.setState({ token: data.token });
        //         console.log(this.state);
        //     });
    }

    render() {
        return (
            <>
                <br />
                {/* Super hackey way to "logout" */}
                <a href="http://localhost:3000/?"><button type="submit" className="btn btn-primary">Logout</button></a>
            </>
        );
    }
}

export default Logout;
