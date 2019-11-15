import React from 'react';
import Header from './Header.js';
import Login from './Login.js';
import Logout from './Logout.js';
import Feed from './Feed.js';



// Adds a Bootstrap layout to the App

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-0 col-sm-0 col-md-1 col-lg-2' />
                        <div className='col-12 col-sm-12 col-md-10 col-lg-8 text-center'>
                            <Header />
                            {this.props.token?<><Logout tokenSetter={this.props.tokenSetter} /><Feed /></>:<Login tokenSetter={this.props.tokenSetter} />}
                        </div>
                        <div className='col-0 col-sm-0 col-md-1 col-lg-2' />

                    </div>
                </div>
            </>
        );
    }
}

export default Layout;
