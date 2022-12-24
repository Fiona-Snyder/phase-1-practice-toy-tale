let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

  function fetchResource() {
    
    fetch ("http://localhost:3000/toys")
    .then (res => res.json())
    .then (data => data.forEach(toy => renderAToy(toy)))
  }

  function renderAToy(toy) {
    //console.log(toy)
    const container = document.querySelector("#toy-collection")
  
    let card = document.createElement('div')
    card.className = "card"

    let h2 = document.createElement("h2")
    card.append(h2)
    h2.innerText = `${toy.name}`

    let img = document.createElement("img")
    card.append(img)
    img.src = `${toy.image}`
    img.className = "toy-avatar"

    let p = document.createElement('p') 
    card.append(p)
    p.innerText = `${toy.likes} Likes`

        let button = document.createElement('button')
    card.append(button)
    button.innerText = "Like ❤️"
    button.className = "Like-btn"
    //button.id = `${toy.id}`

    button.addEventListener("click", () => {
      p.innerText = `${toy.likes += 1} Likes`
    })

    container.append(card)
  }

  fetchResource()
  
  function toyForm() {
    const form = document.querySelector(".add-toy-form")
    //console.log(form)

    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = e.target["name"].value
      const image = e.target["image"].value
      const newToy = {
        name: name,
        image: image,
        likes: 0
      }

      fetch ("http://localhost:3000/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newToy)
      })
      .then (res => res.json())

      .then (data => renderAToy(data))
    })
  }

  toyForm()
  