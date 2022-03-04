$.getJSON("https://api.ipify.org/?format=json", function(e) {
    console.log(e.ip);
    if (e.ip == ["98.167.96.150" && "174.67.147.10"]) {
console.log("bad ip")
window.location.replace('banned.html')
} else {
console.log("piss")
}
});
