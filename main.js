var reasons = [
    "Dad",
    "Me",
    "Mom",
    "Grandmom",

];
var images = [
    "https://us.123rf.com/450wm/ylivdesign/ylivdesign1605/ylivdesign160500244/56085314-dad-icon-in-cartoon-style-on-a-white-background.jpg?ver=6",
    "https://w7.pngwing.com/pngs/665/604/png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png",
    "https://thumbs.dreamstime.com/b/mom-home-working-freelance-business-flat-cartoon-character-concept-vector-illustration-isolated-white-background-young-mother-176393273.jpg",
    "https://t3.ftcdn.net/jpg/02/74/86/30/360_F_274863032_xgwvNFF0u9vZAGPmtvCRHdGxIeeDLAb9.jpg"
];

var i = 0;

function nextslide() {
    document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
}