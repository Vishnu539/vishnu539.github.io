function lenisScroll(){
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);
}
lenisScroll();

function scrollAnimation() {
    document.querySelectorAll(".elem").forEach(function(elem){
        var image = elem.querySelectorAll("img");
        var tl = gsap.timeline();
        let xTransform = gsap.utils.random(-100, 100);
    
        tl
        .set(image, {
            transformOrigin: `${xTransform < 0 ? 0 : '100%'}`
        }, "start")
    
        .to(image, {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: image,
                start: "top top",
                end: "bottom top",
                scrub: "true"
            }
        }, "start")
    
        .to(elem, {
            xPercent: xTransform,
            ease: "none",
            scrollTrigger: {
                trigger: image,
                start: "top top",
                end: "bottom top",
                scrub: "true"
            }
        })
    })
}
scrollAnimation();