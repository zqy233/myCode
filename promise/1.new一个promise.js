const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 更改promise状态成功，触发then方法的第一个函数
    resolve("helloWorld")

    // 不会往下执行了，因为promise状态已经改变

    // 更改promise状态失败，触发then方法的第二个函数
    reject("byeWorld")
  }, 1000)
})

p.then(
  value => {
    console.log("reslove", value)
  },
  reason => {
    console.log("reject", reason)
  }
)
