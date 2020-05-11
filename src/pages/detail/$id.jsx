import React, { Component } from 'react';
import { connect } from 'dva'
import axios from 'axios'
import { IconGlobal } from '../../assets/fonts/iconfont.js'
import { Wrapper, DetailWrapper, DetailMain, DetailTitle, DetailAuthor, DetailContent, DetailPic, DetailParagraph, DetailSide } from './style'

class Detail extends Component {
    render() {
        let { title, content } = this.props.detail;
        return (
            <Wrapper>
                <IconGlobal />
                <DetailWrapper>
                    <DetailMain>
                        <DetailTitle>{title}</DetailTitle>
                        <DetailAuthor>
                            <img src="https://upload.jianshu.io/users/upload_avatars/11864358/2da1d62e-4f01-4bc5-8b21-40cead8cdf21.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="作者头像加载错误"/>
                            <div className="author">
                                <header><span>灵双儿</span><button>关注</button></header>
                                <p><span className="orange"><span className="iconfont">&#xe601;</span>208</span> 2020.02.11 19:57:39 字数 3,092 阅读 72,488</p>
                            </div>
                        </DetailAuthor>
                        <DetailContent>
                            <DetailPic>
                                <img src="//upload-images.jianshu.io/upload_images/11864358-622c38825ebb854e.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/500/format/webp" alt="图片加载错误" />
                            </DetailPic>
                            <DetailParagraph dangerouslySetInnerHTML={{__html: content}} />
                        </DetailContent>
                    </DetailMain>
                    <DetailSide>
                        侧边栏
                    </DetailSide>
                </DetailWrapper>
            </Wrapper>
        );
    }

    // 获取页面初始化数据
    componentDidMount(){
        let { dispatch } = this.props;
        let { id } = this.props.match.params;
        axios.get('/api/detail?id='+id)
        .then(res=>{
            dispatch({ type: 'detail/fetch_success', payload: res.data.detailContent.data })
        })
        .catch(e=>{
            dispatch({ type: 'detail/fetch_error', error: e })
        })
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.detail
    }
}

export default connect(mapStateToProps)(Detail);