import React, { Component } from 'react';
import { connect } from 'dva'
import { CSSTransition } from 'react-transition-group'
import { HeaderDiv, HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, SearchInfo, SearchChange, HotList, Hot, BetaDiv, Aa, Addition, Button } from './style'
import { IconGlobal } from './../../assets/fonts/iconfont'
import twocode from './../../assets/imgs/twocode.png'

class Header extends Component {
    constructor(){
        super();
        this.getHotList = this.getHotList.bind(this);
        this.rotate = this.rotate.bind(this);
    }
    
    // 旋转图标
    rotate(){
        let deg = this.refs.rotate.style.transform.replace(/[^0-9]/ig,'');
        deg = deg ? parseInt(deg,10) : 0 ;
        this.refs.rotate.style.transform = "rotate("+(deg+360)+"deg)";
    }

    // 热门搜索列表
    getHotList(){
        let { rotate } = this;
        let { dispatch } = this.props;
        let { searchFlag, mouseIn, hot, page } = this.props.search;
        let { nightFlag } = this.props.Aa;
        let nightstyle = nightFlag ? "night" : "";
        if(hot){
            hot = hot.filter((value,index)=>{
                if(index>page*10 && index<(page+1)*10){
                    return true;
                }else{
                    return false;
                }
            });
        }
        if((searchFlag || mouseIn)&&hot){
            return (
                <SearchInfo onMouseOver={() => { dispatch({ type: 'search/over' }) }} onMouseOut={() => { dispatch({ type: 'search/out' }) }} className={nightstyle}>
                    <h2>热门搜索</h2>
                    <SearchChange>
                        <span className="iconfont" ref="rotate">&#xe70d;</span><button onClick={() => { dispatch({ type: 'search/hotchange', page }); rotate(); }}>换一换</button>
                    </SearchChange>
                    <HotList>
                        {
                            hot.map((value,index)=>{
                                return <Hot key={index}>{value}</Hot>
                            })
                        }
                    </HotList>
                </SearchInfo>
            );
        }else{
            return null;
        }
    }

    render() {
        let { getHotList } = this;
        let { dispatch } = this.props;
        let { searchFlag, betaFlag, hot } = this.props.search;
        let { AaFlag, nightFlag, songFont, simpleFlag } = this.props.Aa;
        let Aastyle = AaFlag ? "show " : "";
        let fontstyle = songFont ? "song " : "hei ";
        let searchstyle = searchFlag ? "focus " : "";
        let nightstyle = nightFlag ? "night" : "";
        let headerstyle = fontstyle + nightstyle;
        let AaStyle = Aastyle + nightstyle;
        let searchStyle = searchstyle + nightstyle;
        return (
            <div>
                <HeaderDiv className={headerstyle}>
                    <IconGlobal />
                    <HeaderWrapper>
                        <Logo></Logo>
                        {/* Nav开始 */}
                        <Nav>
                            <NavItem className="left active"><span className="iconfont">&#xe6f7;</span>首页</NavItem>
                            <NavItem className="left"><span className="iconfont">&#xe625;</span>下载App</NavItem>
                            <NavItem className="right login">登录</NavItem>
                            <NavItem className="right beta" onClick={() => { dispatch({ type: 'search/betaOk' }) }}></NavItem>
                            {/* 隐藏的beta开始 */}
                            <BetaDiv style={{display : betaFlag ? "block" : "none"}}>
                                <div className="shade"></div>
                                <div className="betatips">
                                    <h4>简书钻相关功能，目前仅能在<span>简书App </span>查看</h4>
                                    <img src={twocode} alt="简述App二维码"/>
                                    <p>扫码下载 简书App</p>
                                    <button onClick={() => { dispatch({ type: 'search/betaNo' }) }}>我知道了</button>
                                </div>
                            </BetaDiv>
                            {/* 隐藏的beta结束 */}
                            <NavItem className="right" onClick={() =>{ dispatch({ type: 'Aa/AaShow' }) }}><span className="iconfont">&#xe655;</span></NavItem>
                            {/* Aa样式框开始 */}
                            {AaFlag ? <CSSTransition in={AaFlag} timeout={200} classNames="Aaslide">
                                <Aa className={AaStyle} onClick={() => { dispatch({ type: 'Aa/AaHide' }) }}>
                                    <div className="night">
                                        <h4><span className="iconfont">&#xe603;</span>夜间模式</h4>
                                        <button onClick={() => { dispatch({ type: 'Aa/nightShow' }) }} className={nightFlag ? "selected" : ""}>开</button>
                                        <button onClick={() => { dispatch({ type: 'Aa/nightHide' }) }} className={nightFlag ? "" : "selected"}>关</button>
                                    </div>
                                    <hr />
                                    <div className="fStyle">
                                        <button onClick={() => { dispatch({ type: 'Aa/songShow' }) }} className={songFont ? "selected" : ""}>宋体</button>
                                        <button onClick={() => { dispatch({ type: 'Aa/songHide' }) }} className={songFont ? "" : "selected"}>黑体</button>
                                        <button onClick={() => { dispatch({ type: 'Aa/simpleShow' }) }} className={simpleFlag ? "selected" : ""}>简</button>
                                        <button onClick={() => { dispatch({ type: 'Aa/simpleHide' }) }} className={simpleFlag ? "" : "selected"}>繁</button>
                                    </div>
                                </Aa>
                            </CSSTransition> : null } 
                            {/* Aa样式框结束 */}
                            <SearchWrapper>
                                <CSSTransition in={searchFlag} timeout={200} classNames="slide">
                                    <NavSearch className={searchStyle} onFocus={() => { if (!hot) { dispatch({ type: 'search/hot'})};dispatch({ type: 'search/focus' }); }} onBlur={() => { dispatch({ type: 'search/blur' }) }}>
                                    </NavSearch>
                                </CSSTransition>
                                <span className={searchFlag ? "focus iconfont" : "iconfont" }>&#xe663;</span>
                                {getHotList()}
                            </SearchWrapper>
                        </Nav>
                        {/* Nav结束 */}
                        <Addition>
                            <Button className="writing"><span className="iconfont">&#xe616;</span>写文章</Button>
                            <Button className="reg">注册</Button>
                        </Addition>
                    </HeaderWrapper>
                </HeaderDiv>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
        Aa: state.Aa
    }
}

export default connect(mapStateToProps)(Header);