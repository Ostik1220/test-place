// https://jsonplaceholder.typicode.com/posts
let currentPage = 1;
function makeList(arr) {
  const objectChanger = arr
    .map((object) => {
      const newObject = `  <li class="pagination-item">
    <h2 class="pagination-number">id:${object.id}</h2>
    <p class="pagination-text">post:${object.title}</p>
  </li>`;
      return newObject;
    })
    .join("");
  return objectChanger;
}

const paginationList = document.querySelector(".pagination-list")

  document.querySelector(".pagination-load-more").addEventListener("click", () => {
    currentPage++
    return currentPage
  })


fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${currentPage}`)
  .then((response) => response.json())
  .then(
    (data) =>
      (paginationList.innerHTML = makeList(data))
  );

