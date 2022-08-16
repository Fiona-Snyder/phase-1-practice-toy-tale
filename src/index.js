let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  // Fetch toy data
  function fetchResource() {
    fetch ("http://localhost:3000/toys")
    .then (res => res.json())
  }

  // Add toy data to the card (Create toy card)
  function renderAToy(toy) {
    const card = document.createElement('div')
    card.className = "card"
    card.innerHTML = `
      <h2>${toy.name}</h2>
      <img src="${toy.imgUrl}" class="toy-avatar" />
      <p>${toy.likes}</p>
      <button class="like-btn" id="${toy.id}">Like ❤️</button>
    `
  // Add toy card to DOM
  document.querySelector("toy-collection").appendChild(card)
  }

  // Create resource to add a new toy
  function addAToy(toyObj) {
    fetch ("http://localhost:3000/toys", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(toyObj)
    })
    .then (res => res.json())
  }

  // Event listener for form submit
  const input = document.querySelector("add-toy-form")
  input.addEventListener(submit, handleSubmit)

  // Event handler for form submit
  function handleSubmit(e) {
    e.preventDefault()
    let toyObj = {
      id: e.target.id.value,
      name: e. target.name.value,
      image: e.target.imgUrl.value,
      likes: 0
    }
    renderAToy()
    addAToy()
  }

  // Increase a Toy's Likes
  function updateAToy(toyObj) {
    fetch ("http://localhost:3000/toys/id", {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(toyObj)
    })
    .then (res => res.json)
  }

  




















});
