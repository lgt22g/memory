let datas = Array.from(document.querySelector("#content > div > div > div.span9 > div.things.clearfix").children).splice(3, 1e9)
let tran = {}
datas.forEach((e) => {
    if (e.innerText.split("\n").length >= 3) {
        let a = e.innerText.split("\n").splice(1, 1e9)
        tran[a[1]] = a[0]
    }
})
document.documentElement.innerText = JSON.stringify(tran)
