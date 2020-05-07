import React, { Component } from 'react';
import { connect } from 'dva'
import axios from 'axios'
import { RecommendWrapper, RecommendItem, RecommendApp, RecommendAppTips } from './../style'

class Recommend extends Component {
    render() {
        let { dispatch } = this.props;
        let { recommend, AppFlag } = this.props.recommend;
        return (
            recommend
            ? <RecommendWrapper>
                {
                    recommend.map(item=>{
                        return <RecommendItem key={item.id} imgURL={item.imgURL}></RecommendItem>
                    })
                }
                <RecommendApp 
                    onMouseOver={() => { dispatch({ type: 'recommend/changeAppFlag' }) }}
                    onMouseOut={() => { dispatch({ type: 'recommend/changeAppFlag' }) }}
                    >
                    <img src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                    <div>
                        <p className="toApp">下载简书手机App <span></span> </p>
                        <p>随时随地发现和创作内容</p>
                    </div>
                </RecommendApp>
                {
                    AppFlag
                    ? <RecommendAppTips>
                        <img src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="二维码加载错误" />
                    </RecommendAppTips>
                    : null
                }
            </RecommendWrapper>
            : null
        );
    }
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
        recommend: state.recommend
    }
}

export default connect(mapStateToProps)(Recommend);