const hot = require('./hot.json');
const article = require('./articleList.json');
const articlemore = require('./articleMore.json');
const recommend = require('./recommend.json');

export default {
    //热门搜索
    "GET /api/hot": (req, res) => { res.status(200).json({ hotlist: hot }) },
    //最新文章
    "GET /api/article": (req, res) => { res.status(200).json({ articleList: article }) },
    // 更多文章
    "GET /api/articlemore": (req, res) => { res.status(200).json({ articleMore: articlemore }) },
    // 推荐
    "GET /api/recommend": (req, res) => { res.status(200).json({ recommendList: recommend }) },
}