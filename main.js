onload = () => {
        document.body.classList.remove("container");
};

var x = document.getElementById("myAudio"); 
var s = false;
document.body.addEventListener("click", function (evt) {
        //console.dir(this);
        //note evt.target can be a nested element, not the body element, resulting in misfires
        //console.log(evt.target);
        //alert("body clicked");
        s = !s;
        if(s)
           x.play(); 
        else 
           x.pause();
    });

