import React from 'react';
import { connect } from 'react-redux';
import { onlyForNotAuthorize } from '../../actions/actionCreator';
import Spinner from '../Spinner/Spinner';

const withNotAuthHoc = (Component) => {
  const mapStateToProps = (state) => state.userStore;

  const mapDispatchToProps = (dispatch) => ({
    checkAuth: (data) => dispatch(onlyForNotAuthorize(data)),
  });

  class HocForLoginSignUp extends React.Component {
    componentDidMount() {
      const {checkAuth, history: {replace}} = this.props;
      this.props.checkAuth(this.props.history.replace);
    }

    render() {
      const {isFetching, data, history} = this.props
      if (this.props.isFetching) {
        return <Spinner />;
      }
      if (!this.props.data) {
        return <Component history={this.props.history} />;
      }
      return null;
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(HocForLoginSignUp);
};

export default withNotAuthHoc;
