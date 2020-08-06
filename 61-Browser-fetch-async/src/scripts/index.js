/* import "../styles/main.scss"; */


const modal = document.getElementById("myModal");
/* let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (1000));
});


promiseOfModal.then(function(val) {
    console.log("User has been on the page for 60 seconds");
    val.style.display = "block";
}) */

function delay(ms, number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

let showModal = async () => {
    try {
        await delay(2000)
        modal.style.display = "block";
    } catch (err) {
        console.log(err)
    }
}
showModal()

modal.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "close":
        case "modal":
            modal.style.display = "none"
            break;
    }
})

let button = document.getElementById("continue")

button.addEventListener("mouseover", (e) => {
    button.style.backgroundColor = "blue"
})


button.addEventListener('animationend', async () => {
    await alert("Continue to subscribe!")
  })

