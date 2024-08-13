const contactBtn = document.getElementById("contact-btn");
const popupForm = document.querySelector("#page1 #popupForm");
const closeBtn = document.querySelector(".close-btn");

contactBtn.addEventListener("click", () => {
  popupForm.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  popupForm.classList.remove("show");
});

popupForm.addEventListener("click", (event) => {
  if (event.target === popupForm) {
    popupForm.classList.remove("show");
  }
});

//get data using api and display in console
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default form submission

  const formData = new FormData(form);
  const apiUrl = "https://reqres.in/api/users";

  fetch(apiUrl, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((data) => {
      console.log(data);
      form.reset();
    }) // clear form data
    .catch((error) => console.error(error));
});
