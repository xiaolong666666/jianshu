import styled from 'styled-components'

// 外封皮
export const Wrapper = styled.div`
    background-color: #f9f9f9; 
`;

//主体部分
export const DetailWrapper = styled.div`
    overflow: hidden;
    width: 1032px;
    margin: 56px auto 0px;
    padding: 10px 16px 0px;
    background-color: #f9f9f9; 
`;

// 详情主体
export const DetailMain = styled.div`
    float: left;
    width: 730px;
    padding: 24px;
    border-radius: 4px;
    background-color: #fff; 
`;

// 详情主体标题
export const DetailTitle = styled.div`
    margin: 0 0 0.5em; 
    color: #404040;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.42857em;
`;

// 详情主体作者信息
export const DetailAuthor = styled.div`
    width: 682px;
    height: 48px;
    margin: 0 0 32px;
    img{
        float: left;
        width: 48px;
        margin: 0 8px 0 0;
        border-radius: 24px;
    }
    .author{
        float: left;
        header{
            margin: 0 0 6px 0;
            span{
                height: 23px;
                display: inline-block;
                line-height: 23px;
            }
        }
        p{
            color: #969696;
            font-size: 13px;
        }
        button{
            outline: none;
            width: 44px;
            height: 22px;
            margin: 0 0 0 8px;
            padding: 2px 9px;
            border: 1px solid #EC7259;
            border-radius: 22px;
            background-color: #fff;
            color: #EC7259;
            font-size: 12px;
            text-align: center;
            line-height: 16px;
        }
        .orange{
            color: #EC7259;
            .iconfont{
                margin: 0 4px 0 0;
                font-size: 13px;
            }
        }
    }
`;

// 详情主体主题图
export const DetailPic = styled.div`
    width: 500px;
    margin: 0 auto 25px;
`;

// 详情主体内容
export const DetailContent = styled.div`
    color: #404040;
    line-height: 1.8em;
`;

// 详情主体段落
export const DetailParagraph = styled.div`
    p{
        margin: 0 0 20px;
    }
    b{
        font-weight: 600;
    }
`;

// 详情侧边栏
export const DetailSide = styled.div`
    position: fixed;
    top: 78px;
    right: 260px;
    width: 260px;
    height: 400px;
    padding: 16px;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    line-height: 200px;
`;