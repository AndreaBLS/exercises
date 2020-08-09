
const gitHubForm = document.querySelector(".gitHubForm")

gitHubForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let usernameInput = document.querySelector(".usernameInput")
    let gitHubUsername = usernameInput.value
    requestUserRepos(gitHubUsername)
})

function requestUserRepos(username) {
    const xhr = new XMLHttpRequest()
    const url = `https://api.github.com/users/${username}/repos`

    xhr.open("GET", url, true)

    xhr.onload = function () {
        const apiData = JSON.parse(this.response)

        console.log(apiData)



        for (let i in apiData) {

            let relativeTime = moment(apiData[i].updated_at).fromNow()

            let ul = document.querySelector(".userRepos")

            let li = document.createElement("li")

            li.classList.add("list-group-item")

            li.innerHTML = (`
            <p><strong>Repository Name:</strong> <a href="${apiData[i].html_url}">${apiData[i].name}</a></p>
            <p><strong>Description:</strong> ${apiData[i].description}</p>
            <p><strong>Last Update:</strong> ${relativeTime}</p>
            `)

            ul.appendChild(li)
        }
    }

    xhr.send()
}

