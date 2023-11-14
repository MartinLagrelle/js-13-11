const body = document.body;

const h1 = document.createElement("h1");
h1.textContent = "Hello World";
h1.className = "monH1";

body.appendChild(h1);

const paragraphe = document.createElement('p');
paragraphe.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi quam quasi aperiam officia laudantium reprehenderit. Quia, aliquid. Distinctio debitis quis non laborum cum incidunt quae. Voluptas est sit amet.";
paragraphe.id = "presentation";

body.appendChild(paragraphe);

h1.parentNode.insertBefore(paragraphe, h1);