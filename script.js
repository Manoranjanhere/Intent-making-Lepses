var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function circlechapta()
{
    var xscale = 1;
    var yscale = 1;
    
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove",function(dets)
    {
            clearTimeout(timeout);

        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;
        mousefollow(xscale,yscale);
        timeout = setTimeout(function()
        {
            document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
        },100);
    });
}
function mousefollow()
{
    window.addEventListener("mousemove",function(dets)
    {
        this.document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    });
}
circlechapta()
mousefollow();


document.querySelectorAll(".ele").forEach(function(ele){
    ele.addEventListener("mousemove",function(dets)
    {
        gsap.to(ele.querySelector("img"),
        {
            opacity: 1,
            ease: Power1,
            
        });
    });
});