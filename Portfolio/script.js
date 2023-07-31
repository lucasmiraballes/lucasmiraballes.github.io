document.addEventListener("DOMContentLoaded", function() {

    const title = document.getElementById("about_me");

    const seccion = document.getElementById("sobre_mi");

    title.addEventListener ("click", () => {

        seccion.scrollIntoView({behavior: "smooth"});
    })
})

document.addEventListener("DOMContentLoaded", function() {

    const title = document.getElementById("academic");

    const seccion = document.getElementById("estudios");

    title.addEventListener ("click", () => {

        seccion.scrollIntoView({behavior: "smooth"});
    })
})

document.addEventListener("DOMContentLoaded", function() {

    const title = document.getElementById("experience");

    const seccion = document.getElementById("exp");

    title.addEventListener ("click", () => {

        seccion.scrollIntoView({behavior: "smooth"});
    })
})

document.addEventListener("DOMContentLoaded", function() {

    const title = document.getElementById("contact");

    const seccion = document.getElementById("contact_me");

    title.addEventListener ("click", () => {

        seccion.scrollIntoView({behavior: "smooth"});
    })
})

