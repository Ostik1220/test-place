function listMaker(arr){
const list = arr.map(object => {
    const layout = `      <li>
         <h1>name:${object.login}</h1>
         <p>id:${object.id}</p>
         <img src="${object.avatar_url}" alt="">
      </li>`

    return layout
}).join("")
return list
}

fetch("https://api.github.com/users").then(response => response.json()).then(data => document.querySelector(".http-list").innerHTML = listMaker(data))


