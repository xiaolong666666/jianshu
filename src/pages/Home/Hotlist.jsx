import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'dva'
import { ArticleWrapper, ArticleHeader, ArticleContent, ArticleFooter, ReadMore } from './../style'
import { IconGlobal } from './../../assets/fonts/iconfont'

class Hotlist extends Component {
    render() {
        let { dispatch } = this.props;
        let { article, page } = this.props.article;
        return (
            article
            ?<div>
                <IconGlobal />
                {
                    article.map((item,index)=>{
                        return <ArticleWrapper key={index}>
                                    <div className="pic"><img src={item.pic} alt="图片加载错误" /></div>
                                    <ArticleHeader>{item.title}</ArticleHeader>
                                    <ArticleContent>{item.show}</ArticleContent>
                                    <ArticleFooter>
                                        <div className="jsz"><span className="iconfont">&#xe601;</span>{item.like}</div>
                                        <div className="change">{item.author}</div>
                                        <div className="change"><span className="iconfont">&#xe604;</span>{item.commentary}</div>
                                        <div><span className="iconfont">&#xe600;</span>{item.love}</div>
                                        <div><span className="iconfont">&#xe611;</span>{item.reward}</div>
                                    </ArticleFooter>
                                </ArticleWrapper>
                    })
                }
                <ReadMore onClick={() => { dispatch({ type: 'article/more', payload: page }) }}>阅读更多</ReadMore>
            </div>
            : null
        );
    }
    componentDidMount(){
        let { dispatch } = this.props;
        axios.get("/api/article")
        .then(res=>{
            dispatch({ type: 'article/fetch_success', article: res.data.articleList.data });
        })
        .catch(e=>{
            dispatch({ type: 'article/fetch_error', error: e });
        })
    }
}

const mapStateToProps = (state) => {
    return {
        article: state.article
    }
}

export default connect(mapStateToProps)(Hotlist);