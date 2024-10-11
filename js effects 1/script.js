function Animation(){
    const content = document.querySelectorAll(".content");

    content.forEach(function(e){
        e.addEventListener("mouseenter", function(){
            gsap.to(e.childNodes[1], {
                color: "#555",
                paddingLeft: "3vw",
                ease: Power3
            })

            gsap.to(e.childNodes[3], {
                opacity: 1,
                scale: 1,
            })
        })

        e.addEventListener("mouseleave", function(){
            gsap.to(e.childNodes[1], {
                color: "#fff",
                paddingLeft: "0vw",
                ease: Power3
            })

            gsap.to(e.childNodes[3], {
                opacity: 0,
                scale: 0,
            })
        })

        e.addEventListener("mousemove", function(dets){
            gsap.to(e.childNodes[3], {
                left: dets.x + "px",
                transform: "translate(-50%, -50%)"
            })
        })
    })
}
Animation();