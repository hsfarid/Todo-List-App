const ul = document.querySelector(".list-menu");
const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");

// add todos
const generateTemplate = (todo) => {
  const html = ` <li><span>${todo}</span><button class="delete">X</button></li>`;

  ul.innerHTML += html;
};
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    //addForm.add.value = "";
    addForm.reset();
  }
});

//delete todos
ul.addEventListener("click", (e) => {
  //   if (e.target.tagName === "BUTTON") {
  //     e.target.parentElement.remove();
  //   }
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  //alternative 1
  //   Array.from(ul.children)
  //     .filter((todo) => {
  //       return todo.textContent.slice(0, -1);
  //     })
  //     .forEach((todo) => {
  //       if (!todo.textContent.includes(term)) {
  //         todo.classList.add("filtered");
  //       } else {
  //         todo.classList.remove("filtered");
  //       }
  //     });

  //alternative 2
  Array.from(ul.children).forEach((todo) => {
    const todos = todo.textContent.slice(0, -1).toLowerCase();
    if (!todos.includes(term)) {
      todo.classList.add("filtered");
    } else {
      todo.classList.remove("filtered");
    }
  });

  //alternative 3
  //   Array.from(ul.children)
  //     .filter((todo) => {
  //       return !todo.textContent.slice(0, -1).toLowerCase().includes(term);
  //     })
  //     .forEach((todo) => {
  //       todo.classList.add("filtered");
  //     });

  //   Array.from(ul.children)
  //     .filter((todo) => {
  //       return todo.textContent.slice(0, -1).toLowerCase().includes(term);
  //     })
  //     .forEach((todo) => {
  //       todo.classList.remove("filtered");
  //     });
};

//filter todos
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
