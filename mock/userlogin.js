import Mock from 'mockjs'
// Mock响应模板
Mock.mock('/api/login', 'post', function (options) {
    //获取json字符串-->转化成js对象
    let userName = JSON.parse(options.body).userName;
    let userPwd = JSON.parse(options.body).userPwd;
    if (userName === "tom" && userPwd === "123") {
        return Mock.mock({ "status": "10001", "msg": "成功登录" });
    } else {
        return Mock.mock({ "status": "20001", "msg": "手机号码/邮箱地址，或密码不正确，请重试" });
    }
});