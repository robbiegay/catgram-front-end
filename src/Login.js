import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            token: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        // alert('Email: ' + this.state.email + ' || Password: ' + this.state.password);
        event.preventDefault();
        axios.post(`http://127.0.0.1:8000/api/login`, this.state)
            .then(response => {
                const data = response.data;
                // console.log(data);
                this.setState({token: data.token});
                this.props.tokenSetter(this.state.token);
                console.log(this.state);
            });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email Address</label>
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll definitely won't share your email with suspicious companies.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        );
    }
}

export default Login;
