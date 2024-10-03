var btn = document.querySelector("button");
btn.addEventListener('click', function() {
    getNewUser();
})


function getNewUser() {
    fetch("https://randomuser.me/api/")
    .then(raw => raw.json())
    .then(result => {
        const {name, gender, email, picture} = result.results[0];
        console.log(result);
        document.querySelector(".main").innerHTML += `<div class="container">   
        <div class="profile">
            <div class="image">
                <img src="${picture.large}" id="img" alt="">
            </div>

            <h2 class="name">${name.first}</h2>
            <h4 class="gender">${gender}</h4>
            <h4 class="email">${email}</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ea!</p>
        </div>
    </div>`
    });
}