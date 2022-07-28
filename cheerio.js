const cheerio = require("cheerio")
const $ = cheerio.load('<h2 class="title">Hello world</h2>')

$("h2.title").text("Hello there!")
$("h2").hasClass("welcome")
$("h2").hasClass("class")  // 删除属性
// $("h2").removeAttr("class")  // 删除属性
// $("h2").removeAttr("class")  // 删除属性
console.log($.html())
