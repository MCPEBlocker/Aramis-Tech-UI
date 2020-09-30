import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form>
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                        <div className="custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="/forgot">password?</a>
                    </p>
                </form>
            </React.Fragment>
        )
    }
}