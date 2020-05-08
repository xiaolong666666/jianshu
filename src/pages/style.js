import styled from 'styled-components'

//主体部分
export const IndexWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 56px auto 0px;
    padding-top: 30px;
`;

// 主体左部分
export const IndexLeft = styled.div`
    float: left;
    width: 640px;
    padding-left: 15px;
    .banner{
        width: 625px;
        height: 270px;
        margin-bottom: 30px;
        border-radius: 4px;
    }
`;

// 文章主体
export const ArticleWrapper = styled.div`
    overflow: hidden;
    margin-bottom: 15px;
    padding: 15px 2px 20px 0px;
    border-bottom: 1px solid #f0f0f0;
    color: #999;
    font-size: 17px;
    line-height: 20px;
    .pic{
        overflow: hidden;
        float: right;
        width: 150px;
        height: 100px;
        margin-left: 6px;
        border-radius: 4px;
        transition: opacity .2s ease-in;
        img{
            width: 150px;
            height: 100px;
        }
    }
`;

// 文章标题
export const ArticleHeader = styled.div`
    margin: -7px 0px 4px;
    color: #333;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5em;
`;

// 文章简介
export const ArticleContent = styled.div`
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
`;

// 文章底部信息
export const ArticleFooter = styled.div`
    color: #B4B4B4;
    div{
        margin-right: 10px;
        float: left;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }
    .iconfont{
        margin-right: 4px;
        font-size: 14px;
    }
    .jsz{
        color: #EA6F5A;
        font-size: 12px;
    }
    .change:hover{
        color: #787878;
        cursor: pointer;
    }
`;

// 文章更多
export const ReadMore = styled.div`
    width: 100%;
    height: 40px;
    margin: 30px 0px 60px;
    border-radius: 20px;
    background: #A5A5A5;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
`;

// 主体右部分
export const IndexRight = styled.div`
    float: left;
    width: 280px;
    margin-left: 40px;
`;

// 推荐内容
export const RecommendWrapper = styled.div`
    position: relative;
    margin-bottom: 30px;
`;

// 推荐列表
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    background: url(${props=>props.imgURL}) no-repeat;
    background-size: contain;
`;

// 下载简书手机App
export const RecommendApp = styled.a.attrs({
    href: 'https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click'
})`
    display: block;
    width: 280px;
    height: 80px;
    margin-top: 12px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
    img{
        float: left;
        width: 60px;
        height: 60px;
    }
    div{
        float: left;
        padding: 8px 12px;
        line-height: 20px;
        .toApp{
            position: relative;
            margin-bottom: 4px;
            color: #333;
            font-size: 15px;
        }
        .toApp::after{
            position: absolute;
            top: 8px;
            right: 10px;
            display: inline-block;
            content: '';
            width: 8px;
            height: 8px;
            border: 1px solid #333;
            border-top: none;
            border-left: none;
            transform: rotate(-45deg);
        }
        p{
            color: #999;
            font-size: 13px;
        }
    }
`;

// 下载简书手机App提示框
export const RecommendAppTips = styled.div`
    position: absolute;
    left: 50px;
    top: 38px;
    width: 180px;
    height: 180px;
    padding: 10px;
    border: 1px solid #666;
    border-radius: 6px;
    background-color: #fff;
    z-index: 99;
    img{
        width: 160px;
        height: 160px;
    }
    ::after{
        display: block;
        position: absolute;
        right: 80px;
        top: 170px;
        content: '';
        width: 16px;
        height: 16px;
        border: 1px solid #666;
        border-bottom: 1px solid transparent;
        border-right: 1px solid transparent;
        background-color: #fff;
        transform: rotate(225deg);
    }
`;

// 推荐作者
export const AuthorWrapper = styled.div`
    color: #969696;
    font-size: 14px;
`;

// 推荐作者标题
export const AuthorHeader = styled.div`
    width: 100%;
    height: 20px;
    line-height: 20px;
    div{
        float: right;
        cursor: pointer;
        .iconfont{
            float: left;
            margin-right: 2px;
            transition: all .2s ease-in;
        }
    }
`;

// 推荐作者列表
export const AuthorItem = styled.div`
    width: 100%;
    height: 48px;
    margin-top: 15px;
    .attention{
        float: right;
        padding: 5px 0 0 ;
        color: #42c02e;
        font-size: 13px;
        cursor: pointer;
        span{
            font-size: 18px;
        }
    }
`;

// 推荐作者头像
export const AuthorFace = styled.div`
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: url(${props=>props.face}) no-repeat;
    background-size: contain;
    cursor: pointer;
`;

// 推荐作者简介
export const AuthorIntroduction = styled.div`
    float: left;
    line-height: 20px;
    header{
        padding-top: 5px;
        color: #333;
        font-size: 14px;
        cursor: pointer;
    }
    p{
        margin: 2px 0px 10px;
        color: #969696;
        font-size: 12px;
    }
`;

// 全部作者
export const AuthorAll = styled.a.attrs({
    href: 'https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users',
    target: '_blank'
})`
    display: inline-block;
    position: relative;
    width: 100%;
    margin: 20px 0 0;
    padding: 7px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background-color: #f7f7f7;
    color: #787878;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    cursor: pointer;
    ::after{
        display: block;
        position: absolute;
        right: 100px;
        top: 12px;
        content: '';
        width: 8px;
        height: 8px;
        border: 1px solid #787878;
        border-bottom: 1px solid transparent;
        border-right: 1px solid transparent;
        background-color: #f7f7f7;
        transform: rotate(135deg);
    }
    :hover{
        color: #787878;
    }
`;

// 首页底部信息
export const IndexFooter = styled.div`
    clear: both;
    width: 100%;
    padding-left: 15px;
`;

// 首页底部链接
export const IndexLink = styled.div`
    position: relative;
    font-size: 13px;
    line-height: 18px;
    ::after{
        position: absolute;
        left: -7px;
        top: 8px;
        content: '';
        width: 2px;
        height: 2px;
        background-color: #fff;
    }
`;

// 首页底部链接列表
export const IndexLinkItem = styled.a.attrs({
    target: '_blank'
})`
    position: relative;
    margin-right: 12px;
    color: #969696;
    ::after{
        position: absolute;
        left: -7px;
        top: 8px;
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 1px;
        background-color: #969696;
    }
    :hover{
        color: #2f2f2f;
    }
`;

// 首页底部版权信息
export const IndexCopy = styled.div`
    width: 680px;
    margin: 15px 0;
    color: #c8c8c8;
    font-size: 12px;
    line-height: 30px;
`;

export const CopyPic = styled.a.attrs({
    target: '_blank'
})`
    display: inline-block;
    margin-bottom: -10px;
    cursor: pointer;
    &.smyz{
        width: 60px;
        height: 30px;
        background: url('http://cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png') no-repeat;
        background-size: contain;
    }
    &.e{
        width: 60px;
        height: 30px;
        background: url('http://cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png') no-repeat;
        background-size: contain;
    }
    &.fz{
        width: 30px;
        height: 30px;
        background: url('http://cdn2.jianshu.io/assets/web/fanzha-10518f0f6b33635180b190975ae68ca6.jpg') no-repeat;
        background-size: contain;
    }
    &.jsflag{
        width: 25.5px;
        height: 30px;
        background: url('http://cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png') no-repeat;
        background-size: contain;
    }
`