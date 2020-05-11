import React, { Component } from 'react';
import { connect } from 'dva'
import axios from 'axios'
import { RecommendWrapper, RecommendItem, RecommendApp, RecommendAppTips } from './../style'

class Recommend extends Component {
    
    render() {
        let { dispatch } = this.props;
        let { recommend, AppFlag } = this.props.recommend;
        let { nightFlag } = this.props.Aa;
        let nightstyle = nightFlag ? "night" : "";
        return (
            recommend
            ? <RecommendWrapper>
                {/* 分类部分开始 */}
                {
                    recommend.map(item=>{
                        return <RecommendItem key={item.id} imgURL={item.imgURL}></RecommendItem>
                    })
                }
                {/* 分类部分结束 */}

                {/* App二维码部分开始 */}
                <RecommendApp className={nightstyle}
                    onMouseOver={() => { dispatch({ type: 'recommend/changeAppFlag' }) }}
                    onMouseOut={() => { dispatch({ type: 'recommend/changeAppFlag' }) }}
                    >
                    <img src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                    <div>
                        <p className="toApp">下载简书手机App <span></span> </p>
                        <p>随时随地发现和创作内容</p>
                    </div>
                </RecommendApp>
                {/* App二维码部分结束 */}

                {/* App二维码提示部分开始 */}
                {
                    AppFlag
                    ? <RecommendAppTips>
                        <img src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="二维码加载错误" />
                    </RecommendAppTips>
                    : null
                }
                {/* App二维码提示部分结束 */}
            </RecommendWrapper>
            : null
        );
    }

    // 获取推荐信息
    componentDidMount(){
        let { dispatch } = this.props;
        axios.get("/api/recommend")
        .then(res => {
            dispatch({ type: 'recommend/fetch_success', recommend: res.data.recommendList.data });
        })
        .catch(e => {
            dispatch({ type: 'recommend/fetch_error', error: e });
        })
    }
}

const mapStateToProps = (state) => {
    return {
        recommend: state.recommend,
        Aa: state.Aa
    }
}

export default connect(mapStateToProps)(Recommend);