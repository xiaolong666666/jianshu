import React from 'react';
import { connect } from 'dva'
import Redirect from 'umi/redirect'
import { WriteWrapper } from './style'

const Write = (props) => {
    let { loginFlag } = props.login;
    return (
        loginFlag
        ? <WriteWrapper>写文章</WriteWrapper>
        : <Redirect to='/sign/Sign_in'/>
    );
};

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(Write);