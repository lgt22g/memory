let transd = JSON.parse(prompt("Transd, create it from train-transd.js"));

function ansr() {
    Array.from(document.querySelector("#__next > div.sc-35r7d9-0.kBvoSf > div > div > div > div > div.sc-1yeljmw-0.jXqGzN > div.sc-1fe58ld-0.ebbpuO > div > div.sc-1opiu1v-0.bBmryr").children).forEach(a => {
        a.innerText.substr(2) == transd[document.querySelector("#__next > div.sc-35r7d9-0.kBvoSf > div > div > div > div > div.sc-1yeljmw-0.jXqGzN > div.sc-1fe58ld-0.ebbpuO > div > div.sc-1jv6lv2-0.iEvmAQ > h2").innerText] && a.firstChild.click()
    })
}
setTimeout = function(a, b) {
    a()
}, setInterval(() => {
    ansr()
}), setInterval(() => {
    document.querySelector("#__next > div.sc-35r7d9-0.kBvoSf > div > div > div > div > div > div.sc-ubjny6-0.kgOVjW > div.sc-ubjny6-0.iFTmKo > div:nth-child(2) > button") && document.querySelector("#__next > div.sc-35r7d9-0.kBvoSf > div > div > div > div > div > div.sc-ubjny6-0.kgOVjW > div.sc-ubjny6-0.iFTmKo > div:nth-child(2) > button").click()
}), setInterval(() => {
    document.querySelector("#__next > div.sc-35r7d9-0.kBvoSf > div > div > div > div > div.sc-1b0kf4d-1.deCLCo > div:nth-child(2) > div > div > div > div.sc-1b0kf4d-5.huPcTf > div > div:nth-child(3) > div > a") && document.querySelector("#__next > div.sc-35r7d9-0.kBvoSf > div > div > div > div > div.sc-1b0kf4d-1.deCLCo > div:nth-child(2) > div > div > div > div.sc-1b0kf4d-5.huPcTf > div > div:nth-child(3) > div > a").click()
})
