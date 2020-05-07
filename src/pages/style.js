import styled from 'styled-components'

//主体部分
export const IndexWrapper = styled.div`
    width: 960px;
    height: 500px;
    margin: 56px auto 0px;
    padding-top: 30px;
`;

// 主体左部分
export const IndexLeft = styled.div`
    float: left;
    width: 640px;
    height: 500px;
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
    height: 500px;
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
    background: url(${props=>props.imgURL});
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

