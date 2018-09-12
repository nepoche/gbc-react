import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"

export default function(ComposedComponent) {
    class NoLogin extends Component {
        static contextTypes = {
            router: PropTypes.object
        };


        componentWillMount() {
            if (this.props.user.user) {
                this.context.router.history.push("/");
            }
        }

        componentWillUpdate(nextProps) {
            if (nextProps.user.user) {
                this.context.router.history.push("/");
            }
        }

        render() {
            if (this.props.user.user === null) {
                return <ComposedComponent {...this.props} />;
            }
            return null;
        }
    }

    function mapStateToProps(state) {
        return { user: state.user };
    }

    return connect(mapStateToProps)(NoLogin);
}
