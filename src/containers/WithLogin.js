import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"

export default function(ComposedComponent) {
    class WithLogin extends Component {
        static contextTypes = {
            router: PropTypes.object
        };

        componentWillMount() {
            if (this.props.user.user === null) {
                this.context.router.history.push("/");
            }
            console.log(this.props.user);
        }

        componentWillUpdate(nextProps) {
            if (nextProps.user.user === null) {
                this.context.router.history.push("/");
            }
        }

        render() {
            if (this.props.user.user) {
                return <ComposedComponent {...this.props} />;
            }
            return null;
        }
    }

    function mapStateToProps(state) {
        return { user: state.user };
    }

    return connect(mapStateToProps)(WithLogin);
}
