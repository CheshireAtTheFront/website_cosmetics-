const form = ({ idForm }) => {
  const popup = document.querySelector(".popup");
  const form = document.getElementById(idForm);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Добро пожаловать!";

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      switch (input.name) {
        case "user_email":
          if (/[^a-z0-9@-_.!~*']/g.test(input.value) || input.value == "") {
            console.log(false);
            input.style.border = "1.5px solid red";
            success = false;
          } else {
            console.log(true);
            input.style.border = "1px solid #808080";
          }
          break;
        case "user_password":
          if (/[^a-z0-9@-_.!~*']/g.test(input.value) || input.value == "") {
            console.log(false);
            input.style.border = "1.5px solid red";
            success = false;
          } else {
            console.log(true);
            input.style.border = "1px solid #808080";
          }
      }
    });
    return success;
  };

  const blockNotification = () => {
    form.append(statusBlock);
    statusBlock.style.marginTop = 20 + "px";
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: data,
      headers: {
        // для бэкенд разработчика,в каком виде он желает увидеть данные
        "Content-type": "application/json; charset=UTF-8",
      },
      // для удобного использования функции sendData, этот метод then, лучше писать здесь
      // ответ от сервера
    }).then((response) => response.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");

    const formData = new FormData(form);
    const formUser = {};

    statusBlock.textContent = loadText;
    blockNotification();

    formData.forEach((val, key) => {
      formUser[key] = val;
    });

    if (validate(formElements)) {
      sendData(JSON.stringify(formUser))
        .then((data) => {
          statusBlock.textContent = successText;
          setTimeout(() => {
            popup.style.display = "none";
            statusBlock.textContent = "";
          }, 1000);
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.textContent = "The data is not valid";
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm();
  });
};

export default form;

/* Модуль который можно нескольео раз вызвать из index.js, 
 на каждую форму по разу и передать в этот модуль id самой формы, чтобы именно с этой формой модуль работал */
