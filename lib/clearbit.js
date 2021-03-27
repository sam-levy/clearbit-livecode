const authorization = "Bearer sk_457b5831e1957efb4748e9e6a72fd3bd";

const fullName = document.getElementById("userName")
const email = document.getElementById("userEmail")
const bio = document.getElementById("userBio")
const location = document.getElementById("userLocation")
const avatar = document.getElementById("userAvatar")

const submit = document.getElementById("clearbitSubmit")
    
const fetchInfo = (event) => {
    event.preventDefault()

    submit.setAttribute("disabled", "")

    fullName.innerText = ""
    email.innerText = ""
    bio.innerText = ""
    location.innerText = ""
    avatar.setAttribute("src", "")

    const input = document.getElementById("clearbitEmail")

    const url = `https://person.clearbit.com/v1/people/email/${input.value}`

    fetch(url, { headers: { Authorization: authorization } })
      .then(response => response.json())
      .then(data => renderInfo(data));
}

const renderInfo = (data) => {
  fullName.innerText = data.name.fullName
  email.innerText = data.email
  bio.innerText = data.bio
  location.innerText = data.geo.city
  avatar.setAttribute("src", data.avatar)

  submit.removeAttribute("disabled")
}

const form = document.getElementById("clearbitForm")

form.addEventListener("submit", fetchInfo)
