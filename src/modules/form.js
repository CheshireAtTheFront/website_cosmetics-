const form = ({ idForm }) => {
  const popup = document.querySelector(".popup");
  const formEntry = document.getElementById(idForm);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Добро пожаловать!";

  // валидация формы
  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      switch (input.name) {
        case "user_name":
          if (/[а-яА-Я\s]/g.test(input.value)) {
            input.style.border = "1.5px solid red";
            success = false;
          } else {
            input.style.border = "1px solid #808080";
          }
          break;
        case "user_email":
          if (/[^a-z0-9@-_.!~*']/g.test(input.value)) {
            input.style.border = "1.5px solid red";
            success = false;
          } else {
            input.style.border = "1px solid #808080";
          }
        // case "user_tel":
        //   if (/[^+()-\d]/g.test(input.value)) {
        //     input.style.border = "1.5px solid red";
        //     success = false;
        //   } else {
        //     input.style.border = "1px solid #808080";
        //   }
        //   break;
      }
    });
    return success;
  };

  const blockNotification = () => {
    formEntry.append(statusBlock);
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
      // для удобного спользования функции sendData, этот метод then, лучше писать здесь
      // ответ от сервера
    }).then((response) => response.json());
  };

  const submitForm = () => {
    const formElements = formEntry.querySelectorAll("input");
    const formData = new FormData(formEntry);
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
      statusBlock.textContent = "Данные не вылидны";
    }
  };

  formEntry.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm();
  });
};

export default form;

/* Модуль который можно нескольео раз вызвать из index.js, 
 на каждую форму по разу и передать в этот модуль id самой формы, чтобы именно с этой формой модуль работал */
