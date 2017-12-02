/**
 * Created by Mobius on 2017/10/14 20:54.
 */
const express = require("express");
const queryString = require("querystring");
const path = require("path");
const app = express();
//请求 localhost:1234/index?name=mobius
app.get("/index", (req, res) => {
    res.send(`${req.query.name}欢迎光临1`);
    console.log(req.params)
});
//请求 localhost:1234/mobius
app.get("/index/:name", (req, res) => {
    res.send(`${req.params.name}欢迎光临2`);
});
app.post('/adult', (req, res) => {
    let pathData = "";
    req.on("data", (chunk) => {
        pathData += chunk;
    });
    req.on("end", () => {
        const obj = queryString.parse(pathData);
        console.log(obj);
        res.send("你的年龄是" + obj.age);
    })
});
app.set("view engine", "ejs");

//设置模板引擎的位置
app.set("views", path.resolve(__dirname, "./../test"));
app.get("/welcome/:name/:gender/:age", (req, res) => {
    const _list = {
        "count": 5,
        "start": 0,
        "total": 36,
        "subjects": [
            {
                "rating": {
                    "max": 10,
                    "average": 8.2,
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "动作",
                    "科幻",
                    "奇幻"
                ],
                "title": "奇异博士",
                "casts": [
                    {
                        "alt": "https://movie.douban.com/celebrity/1009405/",
                        "avatars": {
                            "small": "http://img7.doubanio.com/img/celebrity/small/41072.jpg",
                            "large": "http://img7.doubanio.com/img/celebrity/large/41072.jpg",
                            "medium": "http://img7.doubanio.com/img/celebrity/medium/41072.jpg"
                        },
                        "name": "本尼迪克特·康伯巴奇",
                        "id": "1009405"
                    }
                ],
                "collect_count": 39961,
                "original_title": "Doctor Strange",
                "subtype": "movie",
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2388501883.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2388501883.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2388501883.jpg"
                },
                "alt": "https://movie.douban.com/subject/3025375/",
                "id": "3025375"
            }, {
                "rating": {
                    "max": 10,
                    "average": 8.2,
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "动作",
                    "科幻",
                    "奇幻"
                ],
                "title": "奇异博士",
                "casts": [
                    {
                        "alt": "https://movie.douban.com/celebrity/1009405/",
                        "avatars": {
                            "small": "http://img7.doubanio.com/img/celebrity/small/41072.jpg",
                            "large": "http://img7.doubanio.com/img/celebrity/large/41072.jpg",
                            "medium": "http://img7.doubanio.com/img/celebrity/medium/41072.jpg"
                        },
                        "name": "本尼迪克特·康伯巴奇",
                        "id": "1009405"
                    }
                ],
                "collect_count": 39961,
                "original_title": "Doctor Strange",
                "subtype": "movie",
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2388501883.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2388501883.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2388501883.jpg"
                },
                "alt": "https://movie.douban.com/subject/3025375/",
                "id": "3025375"
            }
        ],
        "title": "正在上映的电影-北京"
    };
    //res.sendFile(__dirname+req.path);
    //返回模板(默认后缀ejs)
    res.render("013express", {
        name: req.params.name,
        gender: req.params.gender,
        age: req.params.age,
        list:_list
    })
});
//*代表所有路径,都识别
app.get("*", (req, res) => {
    console.log(req.path);
    //向客户端返回文件
    //注:文件路径 为绝对路径
    console.log(path.resolve(__dirname + "./../test/user.txt"));
    res.sendFile(path.resolve(__dirname + "./../test/user.txt"));
});
app.listen(1234);
console.log("service start");