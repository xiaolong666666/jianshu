import styled from 'styled-components';
import logo from './../../assets/imgs/logo.png'
import beta from './../../assets/imgs/beta.png'

// 最外层
export const HeaderDiv = styled.div`
    position: fixed;
    top: 0px;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    background-color: #fff;
    &.song{
        font-family: Georgia,Times New Roman,Times,Songti SC,serif
    }
    &.hei{
        font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif
    }
    &.night{
        background-color: #3f3f3f;
        color: #c8c8c8;
    }
`;

// 主体
export const HeaderWrapper = styled.div`
    position: relative;
    width: 1440px;
    height: 56px;
    margin: 0px auto;
`;

// logo
export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    display: inline-block;
    width: 100px;
    height: 56px;
    background: url(${logo});
    background-size: contain;
`;

// 导航
export const Nav = styled.div`
    width: 960px;
    height: 58px;
    margin: 0 auto;
`;

// 导航元素
export const NavItem = styled.div`
    padding: 15px;
    font-size: 17px;
    line-height: 28px;
    cursor: pointer;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #999;
    }
    &.login{
        font-size: 15px;
    }
    &.beta{
        width: 56px;
        height: 25px;
        margin: 15px;
        padding: 0px;
        background: url(${beta});
        background-size: contain;
    }
    &.active{
        color: #ea6f5a;
    }
    .iconfont{
        float: left;
        margin-right: 4px;
        font-size: 22px;
    }
`;

// beta遮罩层
export const BetaDiv = styled.div`
    .shade{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.6;
        z-index: 999;
    }
    .betatips{
        position: fixed;
        left: 50%;
        top: 10%;
        width: 380px;
        padding: 40px 72px;
        background-color: #fff;
        transform: translate(-50%,0);
        color: #333;
        text-align: center;
        z-index: 1000;
        h4{
            font-size: 18px;
            font-weight: 500;
            line-height: 25px;
            span{
                color: #e9634c;
            }
        }
        img{
            width: 190px;
            height: 190px;
            margin: 12px 0px 8px ;
        }
        p{
            font-size: 14px;
            line-height: 20px;
        }
        button{
            outline: none;
            width: 190px;
            margin: 25px auto 0px;
            border: none;
            border-radius: 20px;
            background-color: #e9634c;
            cursor: pointer;
            color: #fff;
            font-size: 14px;
            line-height: 40px;
        }
    }
`;

// Aa设置部分
export const Aa = styled.div`
    position: absolute;
    top: 48px;
    right: 378px;
    width: 237px;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background-color: #fff;
    color: #969696;
    opacity: 0;
    &.show{
        opacity: 1;
    }
    &.Aaslide-enter{
        top: 48px;
        transition: all .2s ease-out;
    }
    &.Aaslide-enter-active{
        top: 58px;
    }
    &.Aaslide-enter-done{
        top: 58px;
    }
    &.Aaslide-exit{
        top: 58px;
        transition: all .2s ease-out;
    }
    &.Aaslide-exit-active{
        top: 48px;
    }
    &.Aaslide-exit-done{
        top: 48px;
    }
    ::after{
        display: block;
        position: absolute;
        right: 29px;
        top: -8px;
        content: '';
        width: 16px;
        height: 16px;
        border: 1px solid #eee;
        border-bottom: 1px solid transparent;
        border-right: 1px solid transparent;
        background-color: #fff;
        transform: rotate(45deg);
    }
    &.night{
        background-color: #3f3f3f;
        color: #c8c8c8;
        ::after{
            border: 1px solid #3f3f3f;
            background-color: #3f3f3f;
        }
        .iconfont{
            color: #c5c514;
        }
        hr{
            border-top: 1px solid #2f2f2f;
        }
        .night,.fStyle{
            button{
                border: 1px solid #2f2f2f;
                background-color: #3f3f3f;
            }
        }
    }
    .night{
        h4{
            float: left;
            margin-right: 20px;
            color: #969696;
            line-height: 42px;
        }
        button{
            outline: none;
            width: 45px;
            height: 42px;
            border: 1px solid #e5e5e5;
            background-color: #fff;
            text-align: center;
            cursor: pointer;
            &.selected{
                background-color: #6dacf4;
                color: #fff;
            }
        }
        button:nth-child(even){
            padding: 10px 13px 10px 17px;
            border-right: none;
            border-radius: 20px 0 0 20px;
        }
        button:nth-child(odd){
            padding: 10px 17px 10px 13px;
            border-left: none;
            border-radius: 0 20px 20px 0;
        }
    }
    hr{
        display: block;
        margin: 20px -20px;
        border: none;
        border-top: 1px solid #f0f0f0;
    }
    .fStyle{
        button{
            outline: none;
            width: 95px;
            height: 42px;
            border: 1px solid #e5e5e5;
            background-color: #fff;
            text-align: center;
            cursor: pointer;
            &.selected{
                background-color: #6dacf4;
                color: #fff;
            }
        }
        button:nth-child(odd){
            padding: 10px 13px 10px 17px;
            border-right: none;
            border-radius: 20px 0 0 20px;
        }
        button:nth-child(even){
            padding: 10px 17px 10px 13px;
            border-left: none;
            border-radius: 0 20px 20px 0;
        }
        button:last-child{
            margin-top: 10px;
        }
    }
`;

// 搜索部分
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .iconfont{
        position: absolute;
        top: 13px;
        right: 4px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        color: #969696;
        text-align: center;
        line-height: 30px;
        &.focus{
            background-color: #969696;
            color: #fff;
        }
    } 
`;

// 搜索框
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 240px;
    height: 38px;
    outline: none;
    margin: 9px 0px 9px 20px; 
    padding: 0px 40px 0px 20px;
    border: 1px solid #eee;
    border-radius: 19px;
    box-sizing: border-box;
    background-color: #eee;
    color: #999;
    font-size: 14px;
    line-height: 38px;
    &::placeholder{
        color: #999
    }
    &.night{
        border: 1px solid #4f4f4f;
        background-color: #4f4f4f;
    }
    &.focus{
        width: 320px;
    }
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 320px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 240px;
    }
`;

// 热门部分
export const SearchInfo = styled.div`
    position: absolute;
    left: 20px;
    top: 58px;
    width: 250px;
    padding: 16px 10px;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background-color: #fff;
    font-size: 17px;
    line-height: 20px;
    &.night{
        background-color: #3f3f3f;
        color: #c8c8c8;
        h2{
            color: #c8c8c8;
        }
        ::after{
            border: 1px solid #3f3f3f;
            background-color: #3f3f3f;
        }
    }
    h2{
        float: left;
        font-size: 14px;
    }
    ::after{
        display: block;
        position: absolute;
        left: 24px;
        top: -8px;
        content: '';
        width: 16px;
        height: 16px;
        border: 1px solid #eee;
        border-bottom: 1px solid transparent;
        border-right: 1px solid transparent;
        background-color: #fff;
        transform: rotate(45deg);
    }
`;

// 热门换一换
export const SearchChange = styled.div`
    position: relative;
    float: right;
    margin-bottom: 16px;
    padding-left: 16px;
    button{
        float: right;
        outline: none;
        border: none;
        background: transparent;
        font-size: 13px;
        cursor: pointer;
    }
    .iconfont{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        display: block;
        transition: all .6s ease-out;
    }
`;

// 热门列表
export const HotList = styled.div`
    overflow: hidden;
    clear: both;
`;

export const Hot = styled.div`
    float: left;
    margin: 0px 20px 15px 0px;
    padding: 0px 5px;
    border: 1px solid #eee;
    border-radius: 3px;
    font-size: 12px;
    line-height: 18px;
`;

// 附加部分
export const Addition = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
`;

// 注册、写文章
export const Button = styled.div`
    float: right;
    padding: 6px 12px;
    border: 1px solid #ea6f5a;
    border-radius: 19px;
    box-sizing: border-box;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    &.reg{
        width: 80px;
        height: 38px;
        margin: 9px 5px 0px 15px;
        color: #ea6f5a;
        line-height: 24px;
    };
    &.writing{
        width: 100px;
        height: 40px;
        margin: 8px 12px 0px 12px;
        background-color: #ea6f5a;
        color: #fff;
        line-height: 26px;
        .iconfont{
            margin-right: 4px;
        }
    }
`;