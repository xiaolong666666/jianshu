import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'dva'
import Redirect from 'umi/redirect'
import Link from 'umi/link'
import { IconGlobal } from './../../assets/fonts/iconfont.js';
import { SignWrapper, Logo, Signform, Title, MySignform, Logintips, SigninMsg, Signin, SignMore, Partner } from './sign'
import './../../../mock/userlogin.js'

class Sign_in extends Component {
    constructor() {
        super();
        this.handdle = this.handdle.bind(this);
        this.handdleSignin = this.handdleSignin.bind(this);
    }

    // 清除错误信息
    handdle(){
        let { dispatch } = this.props;
        dispatch({ type: 'login/clearerror' });
    }

    // 校验登录信息
    handdleSignin() {
        let { dispatch } = this.props;
        let userName = this.refs.userName.value;
        let userPwd = this.refs.userPwd.value;
        axios.post("/api/users/login",{
            userName,
            userPwd
        }).then(res => {
            if(res.data.status==="10001"){
                dispatch({ type: 'login/yes' });
            }else{
                dispatch({ type: 'login/error', msg: res.data.msg });
            }
        })
    }
    render() {
        let { handdle, handdleSignin } = this;
        let { loginFlag, msg } = this.props.login;
        return (
            loginFlag
            ? <Redirect to='/'/>
            : <SignWrapper>
                <IconGlobal />
                <Link to='/'><Logo></Logo></Link>
                {/* 登录表单开始 */}
                <Signform>
                    <Title>
                        <Link to='/sign/Sign_in' className="checksign">登录</Link>
                        <b>·</b>
                        <Link to='/sign/Sign_up'>注册</Link>
                    </Title>
                    <MySignform>
                        <input type="text" placeholder="手机号或邮箱" ref="userName" onFocus={handdle} /><span className="iconfont">&#xe627;</span>
                        <input type="password" placeholder="密码" ref="userPwd" onFocus={handdle} /><span className="iconfont">&#xe7eb;</span>
                        <Logintips className={msg ? "show" : "hide"}>{msg}</Logintips>
                    </MySignform>
                    <SigninMsg>
                        <div><input type="checkbox" defaultChecked={true} />记住我</div>
                        <a href="/">登陆遇到问题?</a>
                    </SigninMsg>
                    <Signin onClick={handdleSignin}>登录</Signin>
                    <SignMore><h6>社交账号直接注册</h6></SignMore>
                    <Partner>
                        <ul>
                            <li><a href="/" className="wb"><span className="iconfont">&#xe61f;</span></a></li>
                            <li><a href="/" className="wx"><span className="iconfont">&#xe622;</span></a></li>
                            <li><a href="/" className="qq"><span className="iconfont">&#xe602;</span></a></li>
                        </ul>
                    </Partner>
                </Signform>
            </SignWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(Sign_in);