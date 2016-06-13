const http = require('http');
const util = require('util');
const EventEmitter = require('events');

module.exports = new EventEmitter();

/**
 * 获取天气信息
 * 异步返回数据事件：weather_data
 * 错误事件： weather_error
 */
module.exports.getWeather = (city) => {
    // city = new Buffer(city,'utf-8').toString();
    var data;

    var options = {
        host: "apis.baidu.com",
        path: "/thinkpage/weather_api/suggestion?location=" + city + "&unit=c&start=0&days=7",
        headers: {
            "apikey": "b5655a58fa8c9da6ffea4c2987fead01",
        }
    };

    const req = http.request(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            data = chunk;
        }).on('end', () => {
            module.exports.emit("weather_data", data, city);
        }).on('error', (e) => {
            module.exports.emit('weather_error', e);
        });
    });
    req.end();
}



