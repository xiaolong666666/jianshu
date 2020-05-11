const hot = require('./hot.json');
const article = require('./articleList.json');
const articlemore = require('./articleMore.json');
const recommend = require('./recommend.json');
const author = require('./author.json');
const link = require('./link.json');
const detail = require('./detail.json');

export default {
    //热门搜索
    "GET /api/hot": (req, res) => { res.status(200).json({ hotList: hot }) },
    //最新文章
    "GET /api/article": (req, res) => { res.status(200).json({ articleList: article }) },
    // 更多文章
    "GET /api/articlemore": (req, res) => { res.status(200).json({ articleMore: articlemore }) },
    // 推荐
    "GET /api/recommend": (req, res) => { res.status(200).json({ recommendList: recommend }) },
    // 推荐作者
    "GET /api/author": (req, res) => { res.status(200).json({ authorList: author}) },
    // 首页底部链接
    "GET /api/link": (req, res) => { res.status(200).json({ linkList: link }) },
    // 详情页数据
    "GET /api/detail": (req, res) => { res.status(200).json({ detailContent: detail }) }
}