import Mock from 'mockjs' 
// Mock响应模板
Mock.mock('/api/create', 'post', function (options) {
    //获取json字符串-->转化成js对象
    let userName = JSON.parse(options.body).userName;
    if (userName === "tom") {
        return Mock.mock({ "status": "20001", "msg": "昵称 昵称已被使用，换一个吧" });
    } else {
        return Mock.mock({ "status": "10001", "msg": "" });
    }

});