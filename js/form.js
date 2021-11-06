const form = document.getElementById("formData")
var token = config.API_TOKEN

form.addEventListener("submit", e => {
  e.preventDefault()

  let name = document.getElementById("name").value
  let number = document.getElementById("phoneNumber").value

  const chat_id = -725208946

  const text = `Foydalanuvchi: %0A - <b>Ismi:</b> ${name} %0A - <b>Nomeri:</b> ${number}`

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`

  console.log("loading")
  fetch(url)
    .then(res => alert("Muvaffaqiyatli Bajarildi!"))
    .catch(err => alert(`The problem is: ${err.message}`))
  console.log("done")

  document.getElementById("name").value = ""
  document.getElementById("phoneNumber").value = ""
})
