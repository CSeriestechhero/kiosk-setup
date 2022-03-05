$.getJSON("https://api.ipify.org/?format=json", function(e) {
    console.log(e.ip);
    if (e.ip === '98.167.96.150' || e.ip === '174.67.147.10' || e.ip === '67.220.180.82' || e.ip === '70.173.92.122' || e.ip === '169.241.65.55') {
console.log("bad ip")
window.location.replace('banned.html')
} else {
console.log("piss")
}
});
