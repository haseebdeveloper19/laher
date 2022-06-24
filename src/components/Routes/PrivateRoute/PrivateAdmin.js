import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const PrivateUser = ({ component: Component,admin, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            admin.isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/login" />
                )
        }
    />
);
PrivateUser.propTypes = {
    admin: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    admin: state.admin,
});
export default connect(mapStateToProps)(PrivateUser);