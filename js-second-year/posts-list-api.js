// Отримати список постів з JSONPlaceholder API Опис: Використайте публічне API JSONPlaceholder для отримання списку постів.
// Зробіть GET-запит за адресою https://jsonplaceholder.typicode.com/posts та перегляньте отримані дані.

function makeList(arr) {
  const objectChanger = arr
    .map((object) => {
      const newObject = `  <li>
    <h2>id:${object.id}</h2>
    <p>post:${object.title}</p>
  </li>`;
      return newObject;
    })
    .join("");
  return objectChanger;
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then(
    (data) =>
      (document.querySelector(".api-practice-list").innerHTML = makeList(data))
  );
