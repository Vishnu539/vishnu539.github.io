// WARM UP 1
var rectangle = document.querySelector("#center");

rectangle.addEventListener("mousemove", function(details) {
    var rectangleLocation = rectangle.getBoundingClientRect();
    var insideRectangleValue = details.clientX - rectangleLocation.left;

    if(insideRectangleValue < rectangleLocation.width / 2){
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insideRectangleValue );
        gsap.to("#center", {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        })
    }else{
        var blueColor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, insideRectangleValue );
        gsap.to("#center", {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4
        })
    }
});

rectangle.addEventListener("mouseleave", function(){
    gsap.to("#center", {
        backgroundColor: "white"
    })
})

// WARM UP 2
document.addEventListener("mousemove", function(details){
    var rectangle = document.querySelector(".rectangle");

    var location = gsap.utils.mapRange(
        0, 
        window.innerWidth, 
        150 + rectangle.getBoundingClientRect().width / 2, 
        window.innerWidth - (150 + rectangle.getBoundingClientRect().width / 2), 
        details.clientX);

    gsap.to(".rectangle", {
        left: location + 'px',
        ease: Power3
    })
})


// WARM UP 3
const throttleFunction = (func, delay) => {
    let prev = 0;

    return (...args) => {
        let now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector(".container").addEventListener("mousemove",
    throttleFunction((details) => {
        var div = document.createElement("div");
        div.classList.add("imagediv");
        div.style.left = details.clientX + 'px';
        div.style.top = details.clientY + 'px';

        var image = document.createElement("img");
        image.setAttribute("src", "https://images.unsplash.com/photo-1540206395-68808572332f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfDF8MHx8fDI%3D");
        div.appendChild(image);

        gsap.to("img", {
            y: "0",
            ease: Power2,
            duration: .6
        })

        gsap.to("img", {
            y: "100%",
            delay: .7,
            ease: Power2
        })

        document.body.appendChild(div);

        setTimeout(function(){
            div.remove();
        }, 2000)
    }, 200));