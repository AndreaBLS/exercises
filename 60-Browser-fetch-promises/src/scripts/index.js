// The following line makes sure your styles are included in the project. Don't remove this.
/* import '../styles/main.scss'; */
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
let myModal = document.querySelector(".modal")
let mySpan = document.querySelector("span")

let myPromise = new Promise(function (resolve, reject) {

        resolve(setTimeout(() => {
            myModal.style.display = "block"
        }, 60000))

        reject("Failed")

    }).then(result => {})

    .catch(message => {
        message
    })

mySpan.addEventListener("click", () => {
    myModal.style.display = "none"
})