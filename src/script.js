document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  header.addEventListener("click", () => {
    alert("Hello, I'm Dmytro!");
  });

  const avatar = document.querySelector("section img");
  avatar.addEventListener("click", () => {
    alert("This is my photo, thank you for your attention!😊");
  });
});
const toggleInfo = document.getElementById("toggleInfo");
const extraInfo = document.getElementById("extraInfo");

toggleInfo.addEventListener("click", () => {
  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
    toggleInfo.textContent = "Hide";
  } else {
    extraInfo.style.display = "none";
    toggleInfo.textContent = "Learn more";
  }
});
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Зупиняє стандартну дію форми

  // Перевіряємо, чи всі поля заповнені
  const name = form.querySelector('[name="name"]').value.trim();
  const email = form.querySelector('[name="email"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();

  if (!name || !email || !message) {
    alert("Будь ласка, заповніть всі поля!");
    return false;
  }

  // Надсилаємо форму
  fetch(form.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Your message has been sent successfully!");
        form.reset(); // Очищаємо форму після успішного надсилання
      } else {
        alert("An error occurred. Please try again.");
      }
    })
    .catch((error) => {
      alert("The form could not be submitted. Please check your connection.");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  });

  // Закриття меню при натисканні на посилання
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  });
});

// Task manager для сайту 
document.addEventListener("DOMContentLoaded", () => {
  const todoContainer = document.getElementById("todo-container");

  function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
    todoContainer.innerHTML = "";
    const tasks = getTasks();

    tasks.forEach((task, index) => {
      const taskEl = document.createElement("div");
      taskEl.classList.add("todo-item");

      const input = document.createElement("input");
      input.type = "text";
      input.value = task.text;
      input.addEventListener("input", () => {
        tasks[index].text = input.value;
        saveTasks(tasks);
      });

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "×";
      removeBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
      });

      taskEl.appendChild(input);
      taskEl.appendChild(removeBtn);
      todoContainer.appendChild(taskEl);
    });
  }

  document.getElementById("todo").insertAdjacentHTML(
    "beforeend",
    `<button id="add-task">Add task</button>`
  );

  document.getElementById("add-task").addEventListener("click", () => {
    const tasks = getTasks();
    tasks.push({ text: "New task" });
    saveTasks(tasks);
    renderTasks();
  });

  renderTasks();
});
