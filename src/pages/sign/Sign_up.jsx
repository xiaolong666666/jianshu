import React, { Component } from 'react';
import axios from 'axios';
import Link from 'umi/link'
import router from 'umi/router'
import { connect } from 'dva'
import { SignWrapper, Logo, Signform, Title, MySignform, Signup, SignupMsg, SignMore, Partner, Tips } from './sign'
import { IconGlobal } from './../../assets/fonts/iconfont.js'
import './../../../mock/usercreate.js'

class Sign_up extends Component {
    constructor(){
        super();
        this.handdleSignup = this.handdleSignup.bind(this);
        this.regName = this.regName.bind(this);
        this.regPhone = this.regPhone.bind(this);
        this.regPwd = this.regPwd.bind(this);
    }

    // 校验是否与数据库中用户名重复
    regName(){
        let { dispatch } = this.props;
        let userName = this.refs.userName.value.trim();
        axios.post("/api/users/create",{
            userName: userName
        }).then(res => {
            if(res.data.status==="20001"){
                dispatch({ type: 'regist/userNametips', tips: res.data.msg });
            }
        })
    }

    // 校验手机号
    regPhone(){
        let { dispatch } = this.props;
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        let userPhone = this.refs.userPhone.value.trim();
        let flag = reg.test(userPhone);
        if(!flag){
            dispatch({ type: "regist/userPhonetips", msg: "请输入正确的手机号" });
        }
    }

    // 检测密码强度
    regPwd(){
        let { dispatch } = this.props;
        let pwd = this.refs.userPwd.value.trim();
        let regSum = /[0-9]/;   //数字正则
        let regStr = /[a-zA-Z]/;    //字母正则
        let fSumStr = /\W/;;    //非数字字母正则
        if (pwd.length >= 6) {
            if (regSum.test(pwd) || regStr.test(pwd) || (fSumStr.test(pwd))) {
                dispatch({ type: 'regist/pwdsmall' });
                if ((regSum.test(pwd) && regStr.test(pwd)) || (regSum.test(pwd) && fSumStr.test(pwd)) || (regStr.test(pwd) && fSumStr.test(pwd))) {
                    dispatch({ type: 'regist/pwdmiddle' });
                    if (regSum.test(pwd) && regStr.test(pwd) && fSumStr.test(pwd)) {
                        dispatch({ type: 'regist/pwdbig' });
                    }
                }
            }
        }else{
            dispatch({ type: 'regist/pwd' });
        }
        console.log(this.refs.userPwd.value);
    }

    // 注册信息传递给后台写入数据库
    handdleSignup(){
        let userName = this.refs.userName.value;
        let userPhone = this.refs.userPhone.value;
        let userPwd = this.refs.userPwd.value;
        axios.post("/api/create",{
            userName,
            userPhone,
            userPwd
        }).then(res=>{
            console.log(res);
            if(res.data.status==="10001"){
                router.push('/sign/Sign_in');
            }
        })
    }

    render() {
        let { handdleSignup, regName, regPhone, regPwd } = this;
        let { dispatch } = this.props;
        let { userNametips, userPhonetips, userPwdtips } = this.props.regist;
        let safety = userPwdtips === "big" ? "big" : userPwdtips === "middle" ? "middle" : userPwdtips === "small" ? "small" : null;
        return (
            <SignWrapper>
                <IconGlobal />
                <Link to='/'><Logo></Logo></Link>
                {/* 注册表单开始 */}
                <Signform>
                    <Title>
                        <Link to='/sign/Sign_in'>登录</Link>
                        <b>·</b>
                        <Link to='/sign/Sign_up' className="checksign">注册</Link>
                    </Title>
                    <MySignform>
                        <input type="text" placeholder="你的昵称" ref="userName" onFocus={() => { dispatch({ type: "regist/clearuserNametips" }) }} onBlur={regName} /><span className="iconfont">&#xe627;</span>
                        <input type="text" placeholder="手机号" ref="userPhone" onFocus={() => { dispatch({ type: "regist/clearuserPhonetips" }) }} onBlur={regPhone} /><span className="iconfont">&#xe605;</span>
                        <input type="password" placeholder="设置密码" ref="userPwd" onKeyUp={regPwd} onBlur={() => { dispatch({ type: "regist/pwd" }) }} /><span className="iconfont">&#xe7eb;</span>
                    </MySignform>
                    <Signup onClick={handdleSignup}>注册</Signup>
                    <SignupMsg>
                        <p>点击 “注册” 即表示您同意并愿意遵守简书</p>
                        <p><a href="https://www.jianshu.com/p/c44d171298ce">用户协议</a> 和 <a href="https://www.jianshu.com/p/2ov8x3">隐私政策</a></p>
                    </SignupMsg>
                    <SignMore><h6>社交账号直接注册</h6></SignMore>
                    <Partner>
                        <ul>
                            <li><a href="/" className="wx"><span className="iconfont">&#xe622;</span></a></li>
                            <li><a href="/" className="qq"><span className="iconfont">&#xe602;</span></a></li>
                        </ul>
                    </Partner>
                        {userNametips ? <Tips>{userNametips}</Tips> : null}
                        {userPhonetips ? <Tips className="userPhonetips">{userPhonetips}</Tips> : null}
                    {userPwdtips ? <Tips className={"userPwdtips "+safety}>{userPwdtips === "big" ? "强" : userPwdtips === "middle" ? "中" : userPwdtips === "small" ? "弱" : null}</Tips> : null}
                </Signform>
            </SignWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        regist: state.regist
    }
}

export default connect(mapStateToProps)(Sign_up);