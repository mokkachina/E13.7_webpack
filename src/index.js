import {btn2, myCom} from "./web";

import '/src/styles/styles.css';
const btn3 = true;
const btn1 = document.querySelector('.posts')
const myPost = document.querySelector("ul");

btn1.addEventListener('click', () => fetch(' http://localhost:3000/posts')
    .then((response) => {
        return response.json();
    })
    .then((data) => {

    for (const post of data) {
        const listItem = document.createElement("li");

        listItem.append(`${post.id}_${post.title}_${post.author}`);

        myPost.appendChild(listItem);

    }
 }));