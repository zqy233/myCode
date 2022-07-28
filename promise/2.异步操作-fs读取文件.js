const fs = require("fs")
const path = require("path")

const p = new Promise((resolve, reject) => {
  fs.readFile(path.resolve(__dirname, "./newPromise.js"), "utf8", (err, data) => {
    if (err) reject(err)
    resolve(data)
  })
})

p.then(
  value => {
    console.log(value.toString())
  },
  reason => {
    console.log(reason)
  }
)
