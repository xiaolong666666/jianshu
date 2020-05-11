import styled from 'styled-components'
import signlogo from './../../assets/imgs/signlogo.png'

// 注册或登录主界面
export const SignWrapper = styled.div`
    position: fixed;
    width: 100%;
    padding: 56px 50px;
    height: 100%;
    background-color: #f1f1f1;
    color: #333;
    z-index: 999; 
`;

// 注册或登录Logo
export const Logo = styled.div`
    position: fixed;
    display: inline-block;
    width: 100px;
    height: 46.43px;
    background-image: url(${signlogo});
    background-size: contain;
`;

// 登录提示信息
export const Logintips = styled.div`
    position: fixed;
    left: 50%;
    top: -10%;
    margin: 4px 2px;
    padding: 5px 10px;
    border: 1px solid #ea6f5a;
    border-radius: 4px;
    box-shadow: 2px 2px 4px #999;
    background-color: #fff;
    transform: translateX(-50%);
    color: #ea6f5a;
    font-size: 16px;
    font-weight: bold;
    line-height: 25px;
    white-space: nowrap;
    &.show{
        opacity: 1;
        transition: all .5s ease-in-out;
    }
    &.hide{
        position: fixed;
        left: 50%;
        top: -12%;
        opacity: 0;
    }
`;

// 注册提示信息
export const Tips = styled.div`
    position: relative;;
    left: 280px;
    top: -380px;
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #ea6f5a;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    line-height: 25px;
    ::after{
        position: absolute;
        left: -7px;
        top: 12px;
        display: inline-block;
        content: '';
        width: 12px;
        height: 12px;
        border: 1px solid #ea6f5a;
        border-right: none;
        border-top: none;
        background-color: inherit;
        transform: rotate(45deg);
    }
    &.userPhonetips{
        position: relative;
        left: 246px;
        top: -330px;
    }
    &.userPwdtips{
        position: relative;
        left: 182px;
        top: -280px;
        color: #fff;
    }
    &.small{
        background-color: #f00;
    }
    &.middle{
        background-color: #f80;
    }
    &.big{
        background-color: #0b0;
    }
`;

// 注册或登录表单外层
export const Signform = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 400px;
    transform: translate(-50%, -50%);
    padding: 50px 50px 30px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    background: #fff;
    text-align: center;
`;

// 注册或登录title切换
export const Title = styled.div`
    margin-bottom: 50px;
    border-radius: 4px;
    a{
        display: inline - block;
        padding: 10px;
        border-bottom: 2px solid transparent;
        color: #969696;
        font-size: 18px;
        font-weight: bold;
    }
    a:hover{
        border-bottom: 2px solid #ea6f5a;
    }
    b{
        padding: 10px;
        font-weight: bold;
    }
    .checksign{
        border - bottom: 2px solid #ea6f5a!important;
        color: #ea6f5a!important;
    }
`;

// 注册或登录表单内容
export const MySignform = styled.div`
    span{
        float: left;
        display: inline - block;
        margin-top: -34px;
        margin-left: 9px;
        color: #969696;
        font-size: 18px;
    }
    input{
        outline: none;
        width: 300px;
        height: 50px;
        padding: 4px 12px 4px 35px;
        border-top: none;
        border: 1px solid #c8c8c8;
        border-top: none;
        box-sizing: border-box;
        background-color: rgba(181, 181, 181, 0.1);
    }
    input::-webkit-input-placeholder{
        color: #969696;
    }
    input:nth-of-type(1){
        border: 1px solid #c8c8c8;
        border-radius: 4px 4px 0px 0px;
    }
    input[type = "password"]{
        border: 1px solid #c8c8c8;
        border-top: none;
        border-radius: 0px 0px 4px 4px;
    }
`;

// 注册按钮
export const Signup = styled.button`
    outline: none;
    width: 100%;
    margin-top: 20px;
    padding: 9px 18px;
    border: none;
    border-radius: 25px;
    background-color: #42c02e;
    color: #fff;
    font-size: 18px;
    line-height: 26px;
    cursor: pointer;
`;

// 登录按钮
export const Signin = styled.button`
    outline: none;
    width: 100%;
    margin-top: 20px;
    padding: 9px 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    font-size: 18px;
    line-height: 26px;
    cursor: pointer;
    background-color: #3194d0;
`;

// 注册信息
export const SignupMsg = styled.div`
    margin: 10px 0px;
    color: #969696;
    font-size: 12px;
    line-height: 20px;
`;

// 登录信息
export const SigninMsg = styled.div`
    overflow: hidden;
    width: 100%;
    margin-top: 20px;
    div{
        float: left;
        color: #969696;
        font-size: 15px;
        input{
            margin-right: 4px;
        }
    }
    a{
        float: right;
        color: #999;
        font-size: 14px;
    }
    a:hover{
        color: #333;
    }
`;

// 注册或登录
export const SignMore = styled.div`
    position: relative;
    margin-top: 50px;
    h6{
        color: #b5b5b5;
        font-size: 12px;
    }
    h6::before{
        position: absolute;
        top: 5px;
        left: 32px;
        display: block;
        content: '';
        width: 60px;
        border-top: 1px solid #b5b5b5;
    }
    h6::after{
        position: absolute;
        top: 5px;
        right: 32px;
        display: block;
        content: '';
        width: 60px;
        border-top: 1px solid #b5b5b5;
    }   
`;

// 合作方注册或登录
export const Partner = styled.div`
    ul{
        margin-bottom: 10px;
        li{
            display: inline-block;
            margin: 0px 5px;
            a{
                display: inline-block;
                width: 50px;
                height: 50px;
                line-height: 50px;
                span{
                    width: 32px;
                    font-size: 32px;
                }
            }
        }
        .wb{
            color: #e05244;
        }
        .wx{
            color: #00bb29;
        }
        .qq{
            color: #498ad5;
        }
    }
`;