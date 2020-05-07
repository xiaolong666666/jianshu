const hot = require('./hot.json');

export default {
    "GET /api/hot": (req,res)=>{res.status(200).json({hotlist:hot})}
}