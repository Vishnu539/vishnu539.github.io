function Animation() {
    tl = gsap.timeline();

    tl.from(".navbar h2", {
        y: -50,
        duration: 1,
        stagger: 0.3
    })

    tl.from(".main h1", {
        opacity: 0, 
        x: -500,
        duration: .8,
        stagger: 0.3
    })

    tl.from("img", {
        x: 100,
        rotate: 45,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3
    })

    tl.from(".footer p", {
        y: 50,
        opacity: 0
    })
}
Animation();

() =>{
    console.log("Animation");
}